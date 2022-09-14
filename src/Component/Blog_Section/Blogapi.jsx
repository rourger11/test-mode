
import axios from "axios";

  export default function BlogData (){

      axios('https://stgm.appsndevs.com/reactmarketplace/rest/V1/getHomeContent', {
        method: "POST",
        data: {storeId: "1"},

        header: {
          "Content-Length": "<calculated when request is sent>",
          "Host": "<calculated when request is sent>",
          "User-Agent": "PostmanRuntime/7.29.2",
          " Accept": "*/*",
          "Connection": "keep-alive",
          "Accept-Encoding": "gzip, deflate, br",
          "Content-Type": "application/json",
          " Authorization": `Bearerzx647qcilhrmqg1udt56ba82d4s34ck8`,
        },
      })
        .then((res) => {

        })
        .catch((error) => {
          console.log("this is error", error);
        });
    };

