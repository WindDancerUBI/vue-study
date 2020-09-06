import './index.scss'
import afunc from "./atest";

afunc()
console.log("hello,webpack!!!!");

if (process.env.NODE_ENV === 'production') {
  console.log('this is production env');
} else {
  console.log('this is development env');
}