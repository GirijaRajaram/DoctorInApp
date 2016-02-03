angular.module('MyApp.services', [])

.factory('Userservice', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
   var chats = [{
    id: 0,
    Name: 'Dr Bruce L. Feldman , MD',
    Specialty: 'Internal Medicine Specialist',
    position: 'Private Practice - Physician at My Personal Doc, Port Washington and Melville,  Consultant - Northeast Business Group on Health. Also serves on Physician Advisory Counsel',
    Img:'img/111.jpg',
    availabletime: [  
                                {
                                   time: '10.00AM to 1.00PM'
                                },
                                 {
                                   time: '6.00PM to 9.00PM'
                                }

                                ]

  }, {
    id: 1,
    Name: 'Dr Rodney Samaan MD, MPH, BS',
    Specialty: 'Cardiology',
    position: 'Preventive Cardiologist ProgressiveMD',
    Img:'img/22.jpg',
     availabletime: [
                                {
                                   time: "7.00AM to 11.00PM"
                                },
                                 {
                                   time: "8.00PM to 10.00PM"
                                }

                                ]

  }, {
    id: 2,
    Name: 'Dr Elliot Goodman MA and MB B Chir (Cantab)',
    Specialty: 'General and Bariatric Surgery',
    position: 'Chief of Bariatric Surgery, Beth Israel Medical Center, NY, MD, BIMC, Principal Investigator, Beth Israel Site, Assistant Professor of Surgery, Albert Einstein College of Medicine',
    Img:'img/33.jpg',
    availabletime: [  
                                {
                                   time: '10.00AM to 1.00PM'
                                },
                                 {
                                   time: '6.00PM to 9.00PM'
                                }

                                ]
  }, {
    id: 3,
    Name: 'Dr Joshua Copeland M.D.',
    Specialty: 'Internal Medicine',
    position: 'Instructor, University of Maryland School of Medicine, Baltimore, MD,Resident, University Hospitals Case Medical Center, Cleveland, OH',
    Img:'img/44.jpg',
    availabletime: [  
                                {
                                   time: '10.00AM to 1.00PM'
                                },
                                 {
                                   time: '6.00PM to 9.00PM'
                                }

                                ]
  }, {
    id: 4,
    Name: 'Dr James McAllister Orthopedic Surgeon',
    Specialty: 'Orthopedics',
    position: 'Founding Physician CaboDoc Health Care, Chief Medical Officer Haima Stem Cell Therapy',
    Img:'img/55.jpg',
    availabletime: [  
                                {
                                   time: '10.00AM to 1.00PM'
                                },
                                 {
                                   time: '6.00PM to 9.00PM'
                                }

                                ]
  }, {
    id: 5,
    Name: 'Dr Marc Beaghler MD, MPH',
    Specialty: 'Urological Surgery & Pediatric Urology',
    position: 'Medical Director at San Buenaventura Urology',
    Img:'img/66.jpg',
    availabletime: [  
                                {
                                   time: '10.00AM to 1.00PM'
                                },
                                 {
                                   time: '6.00PM to 9.00PM'
                                }

                                ]
  }, {
    id: 6,
    Name: 'Dr Karen Weldon MS',
    Specialty: 'OB-GYN',
    position: 'Consultant OBGYN at WellStar Cobb Hospital',
    Img:'img/77.jpg',
    availabletime: [  
                                {
                                   time: '10.00AM to 1.00PM'
                                },
                                 {
                                   time: '6.00PM to 9.00PM'
                                }

                                ]
  },{
    id: 7,
    Name: 'Dr David Piatok MD',
    Specialty: 'Endocrinology, Diabetes & Metabolism',
    position: 'Consultant Endocrinologist at Piatok Endocrine Practice LLC',
    Img:'img/88.jpg',
    availabletime: [  
                                {
                                   time: '10.00AM to 1.00PM'
                                },
                                 {
                                   time: '6.00PM to 9.00PM'
                                }

                                ]
  },{
    id: 8,
    Name: 'Dr Joel Gotvald MD, FACS, RPVI',
    Specialty: 'Vascular Surgery and Varicose Vein Treatment Specialist',
    position: 'Active Staff Surgeon',
    Img:'img/99.jpg',
    availabletime: [  
                                {
                                   time: '10.00AM to 1.00PM'
                                },
                                 {
                                   time: '6.00PM to 9.00PM'
                                }

                                ]
  },{
    id: 9,
    Name: 'Dr Swapnil Gupta MDS, BDS',
    Specialty: 'Orthodontics (Dental)',
    position: 'Product Specialist',
    Img:'img/100.jpg',
    availabletime: [  
                                {
                                   time: '10.00AM to 1.00PM'
                                },
                                 {
                                   time: '6.00PM to 9.00PM'
                                }

                                ]
  },{
    id: 10,
    Name: 'Dr Akash Rajaram MBBS, MD Radiology',
    Specialty: 'Radiologist',
    position: 'Consultant Radiologist',
    Img:'img/101.jpg',
    availabletime: [  
                                {
                                   time: '10.00AM to 1.00PM'
                                },
                                 {
                                   time: '6.00PM to 9.00PM'
                                }

                                ]
  } 

  ];


  var aboutPages = [
                    {
                        title: "About DoctorIn",
                     //description: "Doctor In app is nothing but used to get an immediate appointment from doctors. You can know about various specialty doctors and their details. ",
                      subcontent: [
                                {
                                   data: "1.  Find your doctors depend upon your convenience."
                                },
                                 {
                                   data: "2.  Get an appointment from doctors."
                                },
                                  {
                                   data: "3.  Get relief yourself. "
                                }



                                ]
                     }
                ];


   var settings = [
                    { id: 0,
                        title: 'WiFi',
                     status: 'off',
                     checked: true
                 },

                    { id: 1,
                        title: 'bluetooth',
                      status : 'off',
                      checked: false
                  },

                    {  id: 2,
                        title: 'mobiledata',
                     status: 'off',
                     checked: false
                 }

                    ];


  return {
    all: function() {
      return chats;
    },
     getAboutPage: function() {
      return aboutPages;
    },
    remove: function(chat) {
        var mychat = JSON.parse(localStorage.getItem("chats"));

         mychat.splice(mychat.indexOf(chat), 1);
          localStorage.setItem("chats",JSON.stringify(mychat));
    },

    getSettings: function() {
      return settings;
    },
  /*  init: function() {
      
    if ((localStorage.getItem("aboutPages") === undefined) || (localStorage.getItem("aboutPages") === null) ) {
      localStorage.setItem("aboutPages",JSON.stringify(aboutPages));
  }

    if (localStorage.getItem("chats") == undefined) {
      localStorage.setItem("chats",JSON.stringify(chats));
  }

   
     console.log(localStorage.getItem("aboutPages"));
      console.log(localStorage.getItem("chats"));
    },*/



    getdbsetting: function() {
        return JSON.parse(localStorage.getItem("settings"));   
    },

    getDbaboutPage: function() {
       return JSON.parse(localStorage.getItem("aboutPages"));   
    },

     getDbaboutchat: function() {
       return JSON.parse(localStorage.getItem("chats"));   
    }, 

      getapptime: function() {
       return JSON.parse(localStorage.getItem("appointment"));   
    }, 


    get: function(a) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(a)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
