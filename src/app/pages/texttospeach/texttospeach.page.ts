import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-texttospeach',
  templateUrl: './texttospeach.page.html',
  styleUrls: ['./texttospeach.page.scss'],
})
export class TexttospeachPage implements OnInit {

  constructor(private tts: TextToSpeech) { }

  ngOnInit() {

    this.tts.speak("hello world").then(()=>{
      alert('done');
    }).catch(err=>{
      alert(err.message)
    })
  }


  speak(){
    
  }

}
