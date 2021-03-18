import React, { Component } from "react";
import MyContract from "./contracts/MyContract.json";
import Web3 from 'web3';
import "./App.css";
import QuestionInput from './Components/QuestionInput';
import "bootstrap/dist/css/bootstrap.css";
import { Navbar,Spinner} from 'react-bootstrap';
import Dora from './Components/dora.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Profile from './Components/Profile';
import About from "./Components/About";


 
class App extends Component {
//No Change 
  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }
  //No Change
  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }
  //Change here
  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const adminid = "0xC5f2f554ff3640f975BB8d8CAD49922e69dc2956"
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    if(this.state.account === adminid){
      console.log("Marjaaaa")
      this.setState({admin:true})
    }
    // Network ID
    const networkId = await web3.eth.net.getId()
    const networkData = MyContract.networks[networkId]
    if(networkData) {
      const instance = new web3.eth.Contract(MyContract.abi, networkData.address)
      this.setState({ instance })
      
      //Change here
      // Write your logic to load data stored in your Smart Contract
      const queCount = await instance.methods.queCount().call()
      this.setState({ queCount })   

      //Load Questions   
      for (var i = 1; i <= queCount; i++) {
        const que = await instance.methods.questions(i).call()
        this.setState({
          questions: [...this.state.questions, que]
        })  
      }


      const ansCount = await instance.methods.ansCount().call()
      this.setState({ ansCount })
      
      //Load Answers
      for (var j = 0; j < ansCount; j++) { 
        const ans = await instance.methods.answers(j).call()
        this.setState({
          answers: [...this.state.answers, ans]
        })  
      }

      //No Change
      this.setState({ web3, accounts, contract: instance });
      this.setState({ loading: false})
    } else {
      window.alert('MyContract not deployed to detected network.')
    }
  }

  //Change here
  constructor(props){
    super(props)
    this.state = {
      account: '',
      questions: [],
      loading: true,
      queCount: 0,
      ansCount: 0,
      answers: [],
      admin: false,
  }

    this.postQuestion = this.postQuestion.bind(this)
    this.addAnswer = this.addAnswer.bind(this)
    this.tipAnswer = this.tipAnswer.bind(this)
  }

  postQuestion(que){
    this.setState({ loading: true })
    this.state.instance.methods.postQuestion(que).send({ from: this.state.account }) 
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }

  addAnswer(id, answer){
    this.setState({ loading: true })
    this.state.instance.methods.addAnswer(id, answer).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }
  
  tipAnswer(ansId, tipAmount){
    this.setState({ loading: true })
    this.state.instance.methods.tipAnswer(ansId).send({ from: this.state.account, value: tipAmount }).once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    else{
      if(this.state.admin){
        return <div> Hello World </div>;
      }
      else{
      
        return (
        
          <div className="App">
            <div class="InputBox">
                  { this.state.loading
                    ? <div id="loader" className="text-center">
                      <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                      </Spinner>
                      <p className="text-center">Loading...</p></div>
                    :<div> 
    
                      
                      <Router>
                        <div>
                          <Navbar bg="dark" variant="dark" height="30" style={{marginTop:"0%"}}>
                            <Navbar.Brand >
                              <Link to={'/'} className="nav-link" style={{fontFamily:"sans-serif", fontWeight:"bold", color:"white"}}><img src={Dora} width="100" height="50"/>THE EXPLORER</Link>
                            
                            </Navbar.Brand>
                          
                          <ul className="navbar-nav mr-auto" style={{paddingLeft:"57%"}}>
                          <li><Link to={'/questionInput'} className="nav-link" style={{fontFamily:"sans-serif", fontWeight:"bold", color:"white"}}>Dora World</Link></li>
                          <li><Link to={'/profile'} className="nav-link" style={{fontFamily:"sans-serif", fontWeight:"bold", color:"white"}}>My Profile</Link></li>
                          <li><Link to={'/about'} className="nav-link" style={{fontFamily:"sans-serif", fontWeight:"bold", color:"white"}}>About Us</Link></li>                        
                          </ul>
                          </Navbar>
                          
                          <Switch>
                              <Route exact path='/' component={Home} />
                              <Route exact path='/' component={QuestionInput} />
                              <Route path='/profile' render={(props) => <Profile author={this.state.account} questions={this.state.questions}                   
                                    answers={this.state.answers} {...props}/>}/>
    
                              <Route path="/questionInput" render={(props) => <QuestionInput questions={this.state.questions}                   
                                    postQuestion={this.postQuestion} 
                                    addAnswer={this.addAnswer}
                                    answers={this.state.answers}
                                    tipAnswer={this.tipAnswer} {...props}/>}/>
                              <Route path='/about' component={About} />
                          </Switch>
                        </div>
                        
                      </Router>
    
                                            
                     </div>
                     
                     
                  }
            </div>
            
          </div>
          
          
        );
    }
    }
    
  }
}

export default App;
