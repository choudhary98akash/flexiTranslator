import { Component, OnInit } from '@angular/core';
import { SampleApiService } from './sample-api.service';
import { FetchStatsService } from './fetch-stats.service';


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
  resultText ='';
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
  stats! : {
    visitor :string,
    apiHits :string,
    contributions : string,
    loves :string
}
  
  ngOnInit(): void {
    this.stats = this.fetchStatService.fetch();
  }


  sendOutput(source :string,target :string){

    if(this.inputText===''){
      alert('Please enter something to convert');
    }
    else{
      this.resultText = this.sampleApiService.sendResult(source,target);
    }
     this.resultText === ''? this.result = false : this.result = true;
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


