import { Avatar, Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react'

export default class News extends Component {
    state={
        news:[]
    }
    fetchNews=()=>{
        axios.get("https://newsapi.org/v2/everything?q=tesla&from=2022-03-09&sortBy=publishedAt&apiKey=94c31104935e47ae8be726a69f25129e").then(
            (response)=>{
                console.log(response.data.articles);
                this.setState({
                    news:response.data.articles
                })
            })   
    }
  render() {
    return (
      <div style={{padding:105}}>
          <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Button color='secondary' variant='contained' onClick={this.fetchNews}>View News</Button>
                  <TableContainer>
                      <Table>
                          <TableHead>
                              <TableRow>
                                  <TableCell>Image</TableCell>
                                  <TableCell>Published Date</TableCell>
                                  <TableCell>Title</TableCell>
                                  <TableCell>Description</TableCell>
                                  <TableCell>Content</TableCell>
                              </TableRow>
                          </TableHead>
                          <TableBody>
                              {this.state.news.map((value,index)=>{
                                  return <TableRow>
                                      <TableCell><Avatar variant='square' src={value.urlToImage}/></TableCell>
                                      <TableCell>{value.publishedAt}</TableCell>
                                      <TableCell>{value.title}</TableCell>
                                      <TableCell>{value.description}</TableCell>
                                      <TableCell>{value.content}</TableCell>
                                  </TableRow>

                              })}
                          </TableBody>
                      </Table>
                  </TableContainer>

              </Grid> 
          </Grid>
      </div>
    )
  }
}
