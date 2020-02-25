import React,{Component} from 'react'

import titleStyle from './titleStyle.module.css'

let i=0;
let j=0;
let flag=0;

const seasons=["AUTUMN","SUMMER","WINTER","SPRING"]
const season=seasons[Math.floor(Math.random()*4)];
const target="MANMADE"

class Title extends Component{
    constructor(props){
        super(props);
        this.state={typing:" "}
        this.timer=null;
        this.typingAnimation=this.typingAnimation.bind(this);
    }
    typingAnimation(){
        if(i<season.length*2){
            let temp;
                if(season[i]!==undefined){
                    temp=this.state.typing+season[i]
                }
                else{
                temp=season.slice(0,-(i+1-season.length))
                }
            this.setState({typing:temp})
            i++;
            i===season.length?setTimeout(this.typingAnimation.bind(this),800):setTimeout(this.typingAnimation.bind(this),150)
            }
        else{
            if(j<target.length){
                let temp=this.state.typing+target[j]
                this.setState({typing:temp})
                j++;
                setTimeout(this.typingAnimation.bind(this),200)
            }
            else{
                clearTimeout();
                this.setState({typing:"MANMADE"})
            }
        }
        }
    componentDidMount(){
        this.typingAnimation();
    }

  render(){
    return(
        <div className={titleStyle.titleContainer}>
            <div className={titleStyle.titleOne}>THE BEST</div>
            <div className={titleStyle.titleTwo}>SEASON IS</div>
            <div className={titleStyle.titleThree} >{this.state.typing}<span className={titleStyle.blink}>|</span></div>
        </div>
        )
  }
}

export default Title;