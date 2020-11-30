import React, { Component } from 'react';
import '../styles/App.css';

import Youtube from '../apis/Youtube';
import ApiService from '../apis/ApiService'; //Spring Boot Back-end용  2020.11.16

import SearchBer from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from './VideoDetail';
import SaveList from './SaveList';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [], 
      selectdeVideo: null,
      favoriteVideos: [], // 즐겨찾기용 배열
    }
  }

  handleSubmit = async(term) => {
    const res = await Youtube.get('/search', {
      params: { q: term }
    });
    this.setState({
      videos: res.data.items
    });
  }

  // VideoItem에서 전달된  video 객체를 
  // selectedVideo로 할당. selelctedVideo는 VideoDetail로 전달
  handleVideoSelect = (video) => {
    this.setState({  selectdeVideo: video });
    console.log('▶▶▶',this.state.selectdeVideo);
  }

  handleFavoriteSelect = (video) => {
    this.setState({  selectdeVideo: video });
    console.log('▶▶▶',this.state.selectdeVideo);
  }

  handleFavoriteSelect= (video) => {
    //debugger;
    console.log('▶▶', video);
    this.setState({ selectdeVideo: video });
  }

  handleFavoriteDelete = async (id) => {
    await ApiService.removeMovie(id)
    .then(res => {
      console.info("삭제성공", res.state); //200
      alert("삭제했습니다.");
      this.reloadFavoriteMovies();
    })  
    .catch(err => {
      console.error("ApiService.removeMovie() 에러", err);
      alert("즐겨찾기 삭제오류\n관리자 문의 요망");
    });
  }

  handleVideoSave = async (video) => {
    //debugger;
    //alert("저장 처리");
    var temp = { 
        video_id_videoId: video.id.videoId, 
        video_snippet_title: video.snippet.title, 
        video_snippet_description: video.snippet.description };
     console.log(temp); 
     //debugger;

     //DB 저장
     await ApiService.addMovie(temp)
        .then(res => {
          console.info("저장성공", res.state); //200
          
          //alert("저장했습니다.");
          this.reloadFavoriteMovies();
         // debugger;
          //this.setState({
          //  videos: [],
          //  selectdeVideo: null,
          //  favoriteVideos: [],
          //});
        })
        .catch(err => {
          console.error("ApiService.addMovie() 에러", err);
          alert("즐겨찾기 저장오류\n관리자 문의 요망");
        });
  }

  componentDidMount() {
    console.info("App componentDidMoun()");
    this.reloadFavoriteMovies();
  }

  reloadFavoriteMovies = async () => {
    await ApiService.fetchMovies()
        .then(res => {
          //debugger;
          let temps = res.data; // temps 임시값이라고 설정하고, res.data 값을 받아보는 디버그 작업
          var i = 0;
          var fvl = [];
          while (i < temps.length) {
             //TODO :  
            fvl.push({
              idx: temps[i].id,
              id: { kind: 'youtube#video', videoId: temps[i].video_id_videoId },
              snippet: { 
                  title: temps[i].video_snippet_title, 
                  descriptiong: temps[i].video_snippet_description }, 
            }); 
            i += 1;
          }
          console.log(fvl);
          //debugger;
          this.setState({ favoriteVideos : fvl });
        })
        .catch(err => {
          console.error("ApiService.fetchMovies() 에러", err);  //개발자를 위한 로그
          alert("즐겨찾기 가져오기 오류\n관리자 문의 요망")        //사용자를 위한 로그
        });
  }



  render() {
    console.info('App render()');
    return (
      <div className="App container">
        <div className="row">
          <div className="col">
            {/* 검색바 */}
            <SearchBer
              handleFormSubmit={this.handleSubmit}></SearchBer>
            <div className="row pt-2">
              <div className="col-8" >
                {/* 유튜브 플레이어 */}
                <VideoDetail
                    video={this.state.selectdeVideo}/>
                    {/* 저장리스트 */}
                    <SaveList 
                       videos={this.state.favoriteVideos}
                       handleFavoriteSelect={this.handleFavoriteSelect}
                       handleFavoriteDelete={this.handleFavoriteDelete}>
                    </SaveList>
              </div>
              <div className="col-4">
                {/* 검색결과 */}
                <VideoList 
                  videos={this.state.videos}
                  handleVideoSelect={this.handleVideoSelect}
                  handleVideoSave={this.handleVideoSave}>
                </VideoList>    
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
