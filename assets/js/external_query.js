    // Flexbox function
    
    function flexitem() {
        let data = [
            {"img": "assets/images/icons/1.png", "text":"Failure to thrive – not gaining weight and height as per the age norms"},
            {"img": "assets/images/icons/2.png", "text":"Infections warranting multiple hospitalizations"},
            {"img": "assets/images/icons/3.png", "text":"Requirement of intravenous antibiotics to clear infections"},
            {"img": "assets/images/icons/4.png", "text":"2 or more episodes of pneumonia"},
            {"img": "assets/images/icons/5.png", "text":"Family history of death of children at young age due to immune deficiency "},
            {"img": "assets/images/icons/6.png", "text":"Repeated episodes of diarrhea"},
            {"img": "assets/images/icons/7.png", "text":"2 or more episodes of sinus infections within a year"},
            {"img": "assets/images/icons/8.png", "text":"2 or more episodes of ear discharge"},
            {"img": "assets/images/icons/9.png", "text":"Repeated skin infections"},
            {"img": "assets/images/icons/10.png", "text":"Repeated abscess formation (liver abscess, brain abscess)"}
        ]

        let element = ""

        data.map((data_, i)=>{
            element = element + `<div class="flex-item">
                            <div class="flex-img">
                                <img src="${data_.img}" alt="">
                            </div>
                            <p>${data_.text}</p>
                        </div>`;
        })  
       document.getElementById('flexbox-cont').innerHTML = element;
    }
    flexitem()


    // Testimonial function

    function textmonialItem(){
        let data = [
            {"img": "assets/images/testimonial/Bitmap.png", "name": "John Doe", "designation": "Software Engineer", "quote_img": "assets/images/testimonial/”.png", "text":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},
        {"img": "assets/images/testimonial/Bitmap.png", "name": "John Doe", "designation": "Software Engineer", "quote_img": "assets/images/testimonial/”.png", "text":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}
        ]

        let element = ""

        data.map((data_, i)=>{
            element = element + `<div class="testimonial-item">
                                <div class="person-profile">
                                    <img src="${data_.img}" alt="">
                                    <div class="person-info">
                                        <h3>${data_.name}</h3>
                                        <p>${data_.designation}</p>
                                    </div>
                                    <img id="quote-img" src="${data_.quote_img}" alt="" style="float: right; margin-top: -10px;">
                                </div>
                                <div class="review">
                                    <p>${data_.text}</p>
                                </div>
                            </div>`
        })
        document.getElementById('testimonials').innerHTML = element;
    }
    textmonialItem()


    // Doctors function

    function doctors(){
        let data = [{
            "programme":"Adult BMT", 
            "doctors":[{
            "doctor_name":"Dr. Vijay Agarwal",
            "doctor_img": "assets/images/doctors/vijay-agarwal.png",
            "specialist": "MD, MRCP, PhD,CCT Lead & Sr. Consultant - Medical Oncology & Haematology",
            "description":"Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004.",
            "know_more":"#"
            },{
            "doctor_name":"Dr. Vijay Agarwal",
            "doctor_img": "assets/images/doctors/vijay-agarwal.png",
            "specialist": "MD, MRCP, PhD,CCT Lead & Sr. Consultant - Medical Oncology & Haematology",
            "description":"Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004.",
            "know_more":"#"
            }]
        },{
            "programme":"Pediatric BMT",
            "doctors":[{
            "doctor_name":"Dr. Vijay Agarwal",
            "doctor_img": "assets/images/doctors/vijay-agarwal.png",
            "specialist": "MD, MRCP, PhD,CCT Lead & Sr. Consultant - Medical Oncology & Haematology",
            "description":"Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004.",
            "know_more": "#"
            },{
            "doctor_name":"Dr. Vijay Agarwal",
            "doctor_img": "assets/images/doctors/vijay-agarwal.png",
            "specialist": "MD, MRCP, PhD,CCT Lead & Sr. Consultant - Medical Oncology & Haematology",
            "description":"Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004.",
            "know_more":"#"
            }]
            }]

        let element_doc = ""

        data.map((data_, i)=>{
            element_doc = element_doc + `<div class="col-md-6 col-sm-6 col-xs-6"><div class="doctor-bg"><h4 class="programme">${data_.programme}</h4>`;
            data_.doctors.map((data__, i)=>{
                element_doc = element_doc + `<div class="doctor-profile"><div class="doctor-image"><img src="${data__.doctor_img}" alt=""></div><div class="doctor-name"><h3>${data__.doctor_name}</h3></div><div class="doctor-specialist"><p>${data__.specialist}</p></div><div class="doctor-desc"><p>${data__.description}</p></div><div class="know-more"><a href="${data__.know_more}">Know More</a></div></div><hr />`
                })
            element_doc = element_doc +`</div></div>`;
        })
        document.getElementById('doct').innerHTML = element_doc;
    }
    doctors();

    

    function call_form(){
        let element = document.getElementById('contact-form');
        element.style.display = 'block';
    }