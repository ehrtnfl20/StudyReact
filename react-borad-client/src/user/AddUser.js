import React, { Component } from "react";
import ApiService from '../ApiService';   //ApiService.js

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';



class AddUser extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            userName: '',
            password:'',
            firstName:'',
            lastName:'',
            gender:'',
            salary:'',
            message: null
        };
    }

    onChange = (e) => {
        console.log(e.target.name, e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        });
    } 
    

    saveUser = (e) => {
        e.preventDefault();  // form post 발동 방지
        let user = {
            userName: this.state.userName,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            gender: this.state.gender,
            salary: this.state.salary
        }

        ApiService.addUser(user)
        .then(res => {
            this.setState({ message : '유저저장 성공!'});
            console.info(this.state.message);
            //alert('유저저장 성공!');
            this.props.history.push('/users');
        })
        .catch(err => {
            console.error("saveUser() 에러", err);
            alert('유저저장 실패, 관리자 문의요망');
        });
     }   


    render() {
        return (
            <div>
                <Typography variant="h5" style={style}>사용자 추가</Typography>
                <from>
                    <TextField 
                    type="text" 
                    id="userName" 
                    name="userName"
                    label = '사용자이름'
                    margin="none"
                    fullWidth
                    placeholder="userName을 입력하세요."
                    value={this.state.userName} 
                    onChange={this.onChange} />

                <TextField 
                    type="text" 
                    id="password" 
                    name="password"
                    label = '패쓰워드'
                    margin="none"
                    fullWidth
                    placeholder="password을 입력하세요."
                    value={this.state.password} 
                    onChange={this.onChange} />


                <TextField 
                    type="text" 
                    id="firstName" 
                    name="firstName"
                    label = '이름'
                    margin="none"
                    fullWidth
                    placeholder="이름을 입력하세요."
                    value={this.state.firstName} 
                    onChange={this.onChange} />  

                <TextField 
                    type="text" 
                    id="lastName" 
                    name="lastName"
                    label = '성'
                    margin="none"
                    fullWidth
                    placeholder="lastName을 입력하세요."
                    value={this.state.lastName} 
                    onChange={this.onChange} /> 

              <FormControl fullWidth>      
                <InputLabel id="gender-label">성별</InputLabel>  
                <NativeSelect
                    labelid="gender-label"
                    label="성별"
                    id="gender"
                    name="gender"
                    inputProps={{}}
                    value={this.state.gender}
                    onChange={this.onChange}>
                        <option value="" disabled></option>
                        <option value={'M'} >남자</option>
                        <option value={'F'} >여자</option>
                </NativeSelect>
               </FormControl> 

                <TextField 
                    type="text" 
                    id="salary" 
                    name="salary"
                    label = '급여'
                    margin="dense"
                    fullWidth
                    placeholder="급여을 입력하세요."
                    value={this.state.salary} 
                    onChange={this.onChange} /> 
                   <div style ={buttonStyle}>
                    <Button variant="contained" color="primary" onClick={this.saveUser}>
                        저장
                    </Button> 
                   </div> 
                </from>
            </div>
        );
    }
}


const buttonStyle = {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
}


const style = {
    display: 'flex',
    justifyContent: 'center',
    marginTop:'20px'
}

export default AddUser;