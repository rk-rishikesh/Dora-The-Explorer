// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.5.0 <0.9.0;
contract MyContract {
  
    uint256 public queCount = 0;
    uint256 public ansCount = 0;
    uint256 public stuCount = 0;
    mapping(uint256 => Question) public questions;
    mapping(uint256 => Student) public students;
    
    Answer[] public answers;
    
    address[] public addedStudents;

    struct  Answer {
        uint256 queId;
        address payable author;
        string answer;
        uint tipAmount;
    }

    struct Question {
        uint256 id;
        address author;
        string question;
    }

    struct Student {
        uint256 id;
        string userName;
        address accountAddress;
    }
    event verifiedStudent(bool _value);

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

    function tipAnswer(uint256 _ansCount) public payable{
        Answer storage answerObj = answers[_ansCount];
        // Fetch the author
        address payable _author = answerObj.author;
        (_author).transfer(msg.value);
        answerObj.tipAmount = answerObj.tipAmount + msg.value;
    }
    
    function addStudent(string memory _userName, address _studentAddress) public {
        
        stuCount++;    
        Student storage stuObj = students[stuCount];
        stuObj.userName = _userName;
        stuObj.accountAddress = _studentAddress;
        stuObj.id = stuCount;
        addedStudents.push(_studentAddress);    
    }
    
}
