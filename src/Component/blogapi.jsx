export const blogapi=()=>{

const [blog, setBlog] = useState([]);

 const payload = { storeId: "1" };

 const token = "zx647qcilhrmqg1udt56ba82d4s34ck8";
 const url = "https://stgm.appsndevs.com/reactmarketplace/rest/V1/getHomeContent";

useEffect(() => {
    const blogData = async () => {
      setLoading(true)
      await axios(url, {
        method: "POST",
        data: payload,

        header: {
          "Content-Length": "<calculated when request is sent>",
          "Host": "<calculated when request is sent>",
          "User-Agent": "PostmanRuntime/7.29.2",
          " Accept": "*/*",
          "Connection": "keep-alive",
          "Accept-Encoding": "gzip, deflate, br",
          "Content-Type": "application/json",
          " Authorization": `Bearer ${token}`,
        },
      })
        .then((res) => {
          setBlog(res.data[2].blogs);
          setLoading(false)



        })
        .catch((error) => {
          console.log("this is error", error);
        });
    };
    blogData();
  }, []);
}
