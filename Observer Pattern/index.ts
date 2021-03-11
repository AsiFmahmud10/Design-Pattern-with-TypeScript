//Observer Pattern

class Channel {
     
    writer : string;
    subscribers : Subscriber[];

    constructor(name : string){
      this.writer = name;
      this.subscribers = []
    }
    
 notify_all(article : Article , writer: string){
      
       for(let i = 0 ; i < this.subscribers.length ; i++ ){
              this.subscribers[i].notification(article,writer)

       }
 }

  create_newArticle(title:string){

         let article = new Article(title)
         this.notify_all(article, this.writer)
  }

}


class Article{

   title : string;

   constructor(title : string){
     this.title = title;
   }
  
   get_title(){
       return this.title;
   }

}

class Subscriber{

   name: string;
   
   constructor(name: string){
     this.name = name; 
   }
  
   subscribe( channel : Channel ){
         channel.subscribers.push(this)
   }

  notification(article : Article, writer:string){
         console.log(` ${this.name} a new Article ${article.get_title()} updated by ${writer}`)

  }


}

//Create new channel
let asif = new Channel("Asif")
  
//Create new subscriber

let sub1 = new Subscriber("Rahim")
let sub2 = new Subscriber("mushfiq")
let sub3 = new Subscriber("karim")

//Subscribe to chaneel Asif

 sub1.subscribe(asif)
 sub2.subscribe(asif)
 sub3.subscribe(asif)

//Create article
asif.create_newArticle("Udersatanding Of Observer Pattern ")


