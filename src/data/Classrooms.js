export const Buildings = Object.freeze([
    {name:'Wydziął Matematyki Stosowanej', abbreviation:'MS', address:'Kaszubska 23, 44-100 Gliwice', description:'MS description', image:'/images/wydzial-rms-slide.jpg'},
    {name:'Laboratorium Budownictwa', abbreviation:'LB', address:'Bolesława Krzywoustego 7, 44-100 Gliwice', description:'LB description', image:'/images/wydzial_budownictwa_v3-1.jpg'},
    {name:'Parking Politechnika Śląska Naukowo - CNT', abbreviation:'PCNT', address:'Stanisława Konarskiego 22b, 44-100 Gliwice', description:'Parking description', image:'/images/Centrum-Nowych-Technologii-2.jpg'},
    {name:'Parking Ośrodek Sportu i Rekreacji', abbreviation:'POSR', address:'Akademicka 26, 44-100 Gliwice', description:'Parking description', image:'/images/Hala_OSiR.jpg'},
    {name:'Parking Lodowisko TAFLA', abbreviation:'PLT', address:'Akademicka 29, 44-100 Gliwice', description:'Parking description', image:''}
])

export const EmbedsByBuilding = Object.freeze([
    {startBuilding: 'MS', endBuilding: 'LB', embedURL: 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1071.7489521741552!2d18.679186000229578!3d50.29075262374667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x47113101aa29eacb%3A0xb264c95270614eda!2zUG9saXRlY2huaWthIMWabMSFc2thLCBXeWR6aWHFgiBNYXRlbWF0eWtp4oCm!3m2!1d50.291104499999996!2d18.6800434!4m5!1s0x471131d58fee95a1%3A0x8610e12d1d9dc0ac!2sLaboratorium%20Budownictwa%E2%80%A6!3m2!1d50.2905893!2d18.67881!5e0!3m2!1sen!2spl!4v1726407955872!5m2!1sen!2spl'},
    {startBuilding: 'MS', endBuilding: 'PCNT', embedURL: 'https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d2548.9539042583224!2d18.678483827102674!3d50.29278832156248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e2!4m4!1s0x47113101aa29eacb%3A0xb264c95270614eda!3m2!1d50.291104499999996!2d18.6800434!4m5!1s0x47113100823c3389%3A0x252d03e91fe5da3c!2sParking%20Politechnika%20%C5%9Al%C4%85ska%20Naukowo%E2%80%A6!3m2!1d50.2938632!2d18.6824871!5e0!3m2!1sen!2spl!4v1726407910154!5m2!1sen!2spl'},

    {startBuilding: 'LB', endBuilding: 'MS', embedURL: 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1274.5239656014398!2d18.678154628797735!3d50.29103314497288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x471131d58fee95a1%3A0x8610e12d1d9dc0ac!2sLaboratorium%20Budownictwa%E2%80%A6!3m2!1d50.2905893!2d18.67881!4m5!1s0x47113101aa29eacb%3A0xb264c95270614eda!2zUG9saXRlY2huaWthIMWabMSFc2thLCBXeWR6aWHFgiBNYXRlbWF0eWtp4oCm!3m2!1d50.291104499999996!2d18.6800434!5e0!3m2!1sen!2spl!4v1726407985976!5m2!1sen!2spl'},
    {startBuilding: 'LB', endBuilding: 'PCNT', embedURL: 'https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d1744.9531981898747!2d18.67959622409754!3d50.29195918978376!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x471131d58fee95a1%3A0x8610e12d1d9dc0ac!2sLaboratorium%20Budownictwa%E2%80%A6!3m2!1d50.2905893!2d18.67881!4m5!1s0x47113100823c3389%3A0x252d03e91fe5da3c!2sParking%20Politechnika%20%C5%9Al%C4%85ska%20Naukowo%E2%80%A6!3m2!1d50.2938632!2d18.6824871!5e0!3m2!1sen!2spl!4v1726407681627!5m2!1sen!2spl'},

    {startBuilding: 'PCNT', endBuilding: 'MS', embedURL: 'https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d2548.9539042583256!2d18.678603477102598!3d50.292788321562426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e2!4m5!1s0x47113100823c3389%3A0x252d03e91fe5da3c!2sParking%20Politechnika%20%C5%9Al%C4%85ska%20Naukowo%E2%80%A6!3m2!1d50.2938632!2d18.6824871!4m4!1s0x47113101aa29eacb%3A0xb264c95270614eda!3m2!1d50.291104499999996!2d18.6800434!5e0!3m2!1sen!2spl!4v1726407877740!5m2!1sen!2spl'},
    {startBuilding: 'PCNT', endBuilding: 'LB', embedURL: 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2549.0018186529946!2d18.678368277102614!3d50.29189392156237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x47113100823c3389%3A0x252d03e91fe5da3c!2sParking%20Politechnika%20%C5%9Al%C4%85ska%20Naukowo%E2%80%A6!3m2!1d50.2938632!2d18.6824871!4m5!1s0x471131d58fee95a1%3A0x8610e12d1d9dc0ac!2sLaboratorium%20Budownictwa%E2%80%A6!3m2!1d50.2905893!2d18.67881!5e0!3m2!1sen!2spl!4v1726407805218!5m2!1sen!2spl'},
    
    {startBuilding: 'POSR', endBuilding: '', embedURL: ''},

    {startBuilding: 'PLT', endBuilding: '', embedURL: ''},

    
]);