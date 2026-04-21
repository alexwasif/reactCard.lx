import Cards from './component/cards'
const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://www.pngarts.com/files/11/Google-Logo-Icon-Free-PNG-Image.png",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://pbs.twimg.com/profile_images/1892248257516224513/SzZdRSkx.png",
    company: "Apple",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Bangalore, India" 
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSez1McrNMsAAXCEyFxpBq-TMyzkYZ7fe1S-w&s",
    company: "Meta",
    datePosted: "3 days ago",
    post: "UI Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/019/766/223/small_2x/amazon-logo-amazon-icon-transparent-free-png.png ",
    company: "Amazon",
    datePosted: "10 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    company: "Netflix",
    datePosted: "1 week ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://yt3.googleusercontent.com/qgSeLfJk2OKnQicVDvc_VSlSISmAmWVHYtmSTckcC_iUn7hVfpURctMAqoSz0u4xfER6rlKDBA=s900-c-k-c0x00ffffff-no-rj",
    company: "Microsoft",
    datePosted: "4 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHM0OYfiFeMI2p9MWie0CvL99U4GA1gf6_kayTt_kBblFwHwo8BW8JXlqfnYxKPmmBcXm6WqCy1Yzd43klSX2PfqeV.suPzi_.a.lad5HNsZt8GOjlH843tLG0pWy8RWVb_zcLe4jEWnuve7wABPqHtE-&format=source",
    company: "Adobe",
    datePosted: "8 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://img.utdstc.com/icon/95e/674/95e674e35c459c890dd8c5338b679a40a82bf19fe1911bf74e72cb5bdbdd7ebc:200",
    company: "Uber",
    datePosted: "6 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://yt3.googleusercontent.com/1236ePdfsipfwgiNT9CQ9dDU9xYkpbh9PkTzrb1nrccbzAVoYvmxxmvgPvv94GPw35-1ZtvUOw=s900-c-k-c0x00ffffff-no-rj",
    company: "Airbnb",
    datePosted: "2 days ago",
    post: "UI Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQVV-gN5AooFeB5fWd3gv93lcOdqiT8mUndA&s",
    company: "Tesla",
    datePosted: "12 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$52/hr",
    location: "Chennai, India"
  }
];
  console.log(jobOpenings);
  

  return (
    <div className='parent'>
        {jobOpenings.map(function(item, index){
          console.log(index); 
            return <div key={index}>
              <Cards key={index} company={item.company} post={item.post} datePosted={item.datePosted} tag1={item.tag1} tag2={item.tag2} pay={item.pay} location={item.location} brandLogo={item.brandLogo} />
              </div>
            
            
        })}
    </div>
  )
}

export default App
 