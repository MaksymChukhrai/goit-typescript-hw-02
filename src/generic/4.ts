/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface ComponentProps {
  title: string; 
 }

class Component <T extends ComponentProps>{
  constructor (public props:T) { }
}

// interface PageProps {    //прибрав
//   title: string;
// }

class Page extends Component <ComponentProps>{ //змінив на ComponentProps
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};