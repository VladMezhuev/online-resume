document.addEventListener('DOMContentLoaded', () => {
  const bio = {
    name: 'John',
    role: 'Developer',
    contacts: {
      mobile: '111-222-333',
      email: 'John@gmail.com',
      github: 'JohnDoe',
      twitter: 'JohnDoe',
      location: 'location',
    },
    welcomeMessage: 'hello world',
    skills: ['first', 'second', 'third'],
    biopic: 'https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg',
    display: 'block'
  }

  const work = {
    jobs: [
      {
        employer: 'Planet Express',
        title: 'Delivery Boy',
        location: 'Brooklyn, NY',
        dates: 'January 3000, Future',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus modi debitis numquam. Consequatur, tenetur placeat ea impedit fugit aliquam?',
      },
      {
        employer: 'Panuucos Pizza',
        title: 'Delivery Boy',
        location: 'Brooklyn, NY',
        dates: '1998 - December 31, 1999',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus modi debitis numquam. Consequatur, tenetur placeat ea impedit fugit aliquam?',
      },
    ]
  }
  
  const projects = {
    project: [
      {
        title: 'Sample project 1',
        dates: '2014',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium soluta rem repellendus hic porro quam quasi eum in similique eos?',
        images: ['https://sebweo.com/wp-content/uploads/2019/06/landshaft-bernskikh-alp-v-yasniy-den_thumb.jpg', 'http://fotorelax.ru/wp-content/uploads/2016/03/Beautiful-photos-and-pictures-on-various-subjects-01.jpg'],
      },
    ],
  }
  
  const education = {
    schools: [
      {
        name: 'Nova Southeastem University',
        degree: 'Masters',
        location: 'Fort Lauderdale',
        dates: '2013',
        majors: 'CS',
      },
      {
        name: 'Eckerd Collage',
        degree: 'BA', 
        location: 'Saint Petersburg', 
        dates: '2003',
        majors: 'CS',
      },
    ],
    onlineCourses: [
      {
        title: 'JavaScript Crash Course',
        school: 'Udacity',
        dates: '2014',
        url: 'https://www.udacity.com/  ',
      }
    ]
  }
  
  function replace(el, data) {
    return el.replace('%data%', data)
  }
  
  // Bio
  
  $('#header').prepend(replace(HTMLheaderName, bio.name), replace(HTMLheaderRole, bio.role))
  $('#topContacts').append(replace(HTMLmobile, bio.contacts.mobile), replace(HTMLemail, bio.contacts.email), replace(HTMLgithub, bio.contacts.github), replace(HTMLblog, bio.contacts.github), replace(HTMLblog, bio.contacts.twitter), replace(HTMLlocation, bio.contacts.location))
  $('#footerContacts').append(replace(HTMLmobile, bio.contacts.mobile), replace(HTMLemail, bio.contacts.email), replace(HTMLgithub, bio.contacts.github), replace(HTMLblog, bio.contacts.github), replace(HTMLblog, bio.contacts.twitter), replace(HTMLlocation, bio.contacts.location))
  $('#topContacts').after(replace(HTMLbioPic, bio.biopic), replace(HTMLwelcomeMsg, bio.welcomeMessage))
  $('.welcome-message').after(HTMLskillsStart)
  
  bio.skills.forEach(el => {
    $('#skills').append(replace(HTMLskills, el))
  })
  
  // Work
  
  $('#workExperience').append(HTMLworkStart)
  
  work.jobs.forEach(el => {
    let {employer, title, dates, location, description} = el
    $('.work-entry').append(replace(HTMLworkEmployer, employer) + replace(HTMLworkTitle, title), replace(HTMLworkDates, dates), replace(HTMLworkLocation, location), replace(HTMLworkDescription, description))
  })
  
  // Projects
  
  $('#projects').append(HTMLprojectStart)
  
  projects.project.forEach(el => {
    let {title, dates, description} = el
    $('.project-entry').append(replace(HTMLprojectTitle, title), replace(HTMLprojectDates, dates), replace(HTMLprojectDescription, description))
    el.images.forEach(image => {
      $('.project-entry').append(replace(HTMLprojectImage, image))
    })
  })
  
  //  Education
  
  $('#education').append(HTMLschoolStart)
  
  education.schools.forEach(el => {
    let {name, degree, location, dates, majors} = el
    $('.education-entry').append(replace(HTMLschoolName, name) + replace(HTMLschoolDegree, degree), replace(HTMLschoolLocation, location), replace(HTMLschoolDates, dates), replace(HTMLschoolMajor, majors))
  })
  
  education.onlineCourses.forEach(el => {
    let {title, school, dates, url} = el
    $('.education-entry').append(HTMLonlineClasses, replace(HTMLonlineTitle, title) + replace(HTMLonlineSchool, school), replace(HTMLonlineDates, dates), replace(HTMLonlineURL, url))
  })
  
  // Map
  
  $('#mapDiv').append(googleMap)
  
  const maps = [
    {
      el: 'map',
      center: [47.4752108, 7.7419468],
      markers: [
        [{ lat: 47.4746108, lng: 7.7419468 }],
        [{ lat: 47.4750108, lng: 7.7430468 }],
        [{ lat: 47.4753108, lng: 7.7425468 }],
      ],
    },
  ]
  
  function initMap({ el, center, markers }) {
    const elem = document.getElementById(el);
  
    if (elem) {
      const map = new google.maps.Map(elem, {
        center: new google.maps.LatLng(...center),
        zoom: 18,
      });
      markers.forEach(([position]) => {
        const marker = new google.maps.Marker({
          position,
          map,
        });
      });
    }
  }
  
  maps.forEach(initMap)
  
  window.initMap = initMap
})