import React, { Component } from "react";
import ApiService from '../ApiService';   //ApiService.js

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import CreateIcon from '@material-ui/icons/Create';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


class UserList extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            users: [],
            message: null,
        }
        console.log('constructor run');
    }

    componentDidMount() {
        console.log('componentDidMount run');
        this.reloadUserList();
    }

    reloadUserList() {
        ApiService.fetchUsers()
            .then(res => {  //결과를 돌려받는 값
                this.setState({users: res.data});
            })
            .catch(err => { //catch 에러났을 때 어떻게 할지
                console.error('reloadUserList() 에러!', err);
                alert('사용자정보 조회 오류, 관리자 문의요망');
            });   
    }

    componentWillUnmount() {
        console.log('componentWillUnmount rus');
    }

    addUser = () => {
        window.localStorage.removeItem('id');
        this.props.history.push('/add-user');
    }

    editUser = (id) => {
     window.localStorage.setItem('id', id);
     this.props.history.push('/edit-user');
    }
    
    deleteUser = (id) => {
        if(window.confirm('삭제하시겠습니까?')){
            //삭제처리
            ApiService.removerUser(id)
                .then(res => {
                    this.setState({
                        message: '삭제성공',
                        users: this.state.users.filter(user => user.id !== id)
                    });
                    alert('삭제성공');
                })
                .catch(err => {
                    console.error("deleteUser() 에러", err);
                    alert('유저 삭제 오류, 관리자 문의 요망');
                });
        }    
    }

    render() {
        console.log('render run');
        console.log('this.state.users =>', this.state.users)
        return (
            <div>
                <Typography variant="h4" style={style}>사용자 리스트</Typography>
                <Button 
                    variant="contained" 
                    color="primary"
                    onClick={this.addUser}>추가
                </Button>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Id</TableCell>
                            <TableCell align="center">User Name</TableCell>
                            <TableCell align="center">First Name</TableCell>
                            <TableCell align="center">Last Name</TableCell>
                            <TableCell align="center">Gender</TableCell>
                            <TableCell align="center">Salary ($)</TableCell>
                            <TableCell align="center">Edit</TableCell>
                            <TableCell align="center">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.users.map(user => 
                        <TableRow key={user.id}>
                            <TableCell align="right">{user.id}</TableCell>
                            <TableCell align="left">{user.userName}</TableCell>
                            <TableCell align="left">{user.firstName}</TableCell>
                            <TableCell align="left">{user.lastName}</TableCell>
                            <TableCell align="center">{user.gender}</TableCell>
                            <TableCell align="right">{user.salary}</TableCell>
                            <TableCell align="center" 
                                       onClick={() => this.editUser(user.id)}> <EditIcon /></TableCell>
                            <TableCell align="center" 
                                       onClick={() => this.deleteUser(user.id)}> 
                                <DeleteIcon></DeleteIcon>
                            </TableCell>
                        </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        );
    }
    
}

const style = {
    display: 'flex',
    justifyContent: 'center',
    marginTop:'20px'
}

export default UserList;