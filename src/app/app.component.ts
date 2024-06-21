import { Component, OnInit } from '@angular/core';
import { SampleApiService } from './sample-api.service';
import { FetchStatsService,Stats } from './fetch-stats.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   constructor(
    private sampleApiService : SampleApiService,
    private fetchStatService : FetchStatsService
   ){}

  title = 'translator';
  home = true;
  faq = false;
  feedback = false;
  howto = false;
  contact = false;
  inputText = '';
  resultText : any;
  result = false;
  sourceLanguage ='English';
  targetLanguage = 'Japanese';
  languages = [
    "Afrikaans",
    "Albanian",
    "Amharic",
    "Arabic",
    "Armenian",
    "Assamese",
    "Aymara",
    "Azerbaijani",
    "Bambara",
    "Basque",
    "Belarusian",
    "Bengali",
    "Bhojpuri",
    "Bosnian",
    "Bulgarian",
    "Catalan",
    "Cebuano",
    "Chinese (Simplified)",
    "Chinese (Traditional)",
    "Corsican",
    "Croatian",
    "Czech",
    "Danish",
    "Dhivehi",
    "Dogri",
    "Dutch",
    "English",
    "Esperanto",
    "Estonian",
    "Ewe",
    "Filipino (Tagalog)",
    "Finnish",
    "French",
    "Frisian",
    "Galician",
    "Georgian",
    "German",
    "Greek",
    "Guarani",
    "Gujarati",
    "Haitian Creole",
    "Hausa",
    "Hawaiian",
    "Hebrew",
    "Hindi",
    "Hmong",
    "Hungarian",
    "Icelandic",
    "Igbo",
    "Ilocano",
    "Indonesian",
    "Irish",
    "Italian",
    "Japanese",
    "Javanese",
    "Kannada",
    "Kazakh",
    "Khmer",
    "Kinyarwanda",
    "Konkani",
    "Korean",
    "Krio",
    "Kurdish",
    "Kurdish (Sorani)",
    "Kyrgyz",
    "Lao",
    "Latin",
    "Latvian",
    "Lingala",
    "Lithuanian",
    "Luganda",
    "Luxembourgish",
    "Macedonian",
    "Maithili",
    "Malagasy",
    "Malay",
    "Malayalam",
    "Maltese",
    "Maori",
    "Marathi",
    "Meiteilon (Manipuri)",
    "Mizo",
    "Mongolian",
    "Myanmar (Burmese)",
    "Nepali",
    "Norwegian",
    "Nyanja (Chichewa)",
    "Odia (Oriya)",
    "Oromo",
    "Pashto",
    "Persian",
    "Polish",
    "Portuguese (Portugal, Brazil)",
    "Punjabi",
    "Quechua",
    "Romanian",
    "Russian",
    "Samoan",
    "Sanskrit",
    "Scots Gaelic",
    "Sepedi",
    "Serbian",
    "Sesotho",
    "Shona",
    "Sindhi",
    "Sinhala (Sinhalese)",
    "Slovak",
    "Slovenian",
    "Somali",
    "Spanish",
    "Sundanese",
    "Swahili",
    "Swedish",
    "Tagalog (Filipino)",
    "Tajik",
    "Tamil",
    "Tatar",
    "Telugu",
    "Thai",
    "Tigrinya",
    "Tsonga",
    "Turkish",
    "Turkmen",
    "Twi (Akan)",
    "Ukrainian",
    "Urdu",
    "Uyghur",
    "Uzbek",
    "Vietnamese",
    "Welsh",
    "Xhosa",
    "Yiddish",
    "Yoruba",
    "Zulu"
  ];
  stats : Stats = {
    visitor: 0,
    apiHits: 0,
    loves: 0,
    contributions: 0
  };
  
  ngOnInit(): void {
    const finalStats = this.fetchStatService.fetch();
    console.log(finalStats.apiHits,finalStats.visitor,finalStats.contributions,finalStats.loves, 'are the stats api ,visitor ,contri and loves ');
    this.animateValue('visitor', finalStats.visitor);
    this.animateValue('apiHits', finalStats.apiHits);
    this.animateValue('loves', finalStats.loves);
    this.animateValue('contributions', finalStats.contributions);
  }

  animateValue(key: keyof Stats, end: number) {
    let start = 0;
    const duration = 2000; // duration in milliseconds
    const stepTime = Math.abs(Math.floor(duration / end));
    const obj = this.stats;

    const timer = setInterval(() => {
      start += 1;
      obj[key] = start;
      if (start === end) {
        clearInterval(timer);
      }
    }, stepTime);
  }


  sendOutput(source :string,target :string){

    if(this.inputText===''){
      alert('Please enter something to convert');
    }
    else{
      this.resultText = this.sampleApiService.sendResult(this.inputText,target,source);
    }
     this.resultText === undefined? this.result = false : this.result = true;
  }


  showHome() {
    this.home = true;
    this.faq = false;
    this.feedback = false;
    this.howto = false;
    this.contact = false;
  }
  showFeedBack() {
    this.home = false;
    this.faq = false;
    this.feedback = true;
    this.howto = false;
    this.contact = false;
  }

  showFaq() {
    this.home = false;
    this.faq = true;
    this.feedback = false;
    this.howto = false;
    this.contact = false;
  }
  showHOwTo() {
    this.home = false;
    this.faq = false;
    this.feedback = false;
    this.howto = true;
    this.contact = false;
  }
}


