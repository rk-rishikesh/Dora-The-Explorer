// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.5.16 <0.8.0;

contract MyContract {
  
    uint256 public queCount = 0;
    uint256 public ansCount = 0;
    mapping(uint256 => Question) public questions;
    
    Answer[] public answers;

    struct  Answer {
        uint queId;
        address payable author;
        string answer;
        uint tipAmount;
    }

    struct Question {
        uint id;
        address author;
        string question;
    }

    function postQuestion(string memory _question) public {
        
        queCount++;    
        Question storage questionObj = questions[queCount];
        questionObj.author = msg.sender;
        questionObj.question = _question;
        questionObj.id = queCount;
    }
    
    function addAnswer(uint _queId, string memory _answer) public{

        ansCount++;
        answers.push(Answer({
            queId : _queId,
            author: msg.sender,
            answer: _answer,
            tipAmount: 0
        }));
    }

    function tipAnswer(uint _ansCount) public payable{
        Answer storage answerObj = answers[_ansCount];
        // Fetch the author
        address payable _author = answerObj.author;
        (_author).transfer(msg.value);
        answerObj.tipAmount = answerObj.tipAmount + msg.value;
    }
    
}
