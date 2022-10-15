import './style.css';


function component() {
    const element = document.createElement('div');
    const header = document.createElement('div')
    const homeButton = document.createElement('button')
    const menuButton = document.createElement('button')
    const contactButton = document.createElement('button')
    const copyText = document.createElement('div');
    const hourText = document.createElement('div');
    const locationText = document.createElement('div');
    const headerText = document.createElement('div');

    homeButton.textContent = ['Home']
    menuButton.textContent = ['Menu']
    contactButton.textContent = ['Contact']
 
    header.classList.add('position')
    homeButton.classList.add('tabs')
    menuButton.classList.add('tabs')
    
    contactButton.classList.add('tabs')

    contactButton.addEventListener('click', function() {
        while (element.firstChild) {
         element.removeChild(element.firstChild);   
        }
        document.getElementById('content').appendChild(createContact())
    })

    menuButton.addEventListener('click', function() {
        while (element.firstChild) {
            element.removeChild(element.firstChild);   
           }
    document.getElementById('content').appendChild(createMenu());
    })

    header.appendChild(homeButton)
    header.appendChild(menuButton) 
    header.appendChild(contactButton)

    element.appendChild(header)

    locationText.textContent = ['Location \r\n 1230 Baker Drive, Manhattan, New York']

    locationText.setAttribute('style', 'white-space: pre;')

    hourText.textContent = [
        'Hours \r\n Monday: Closed \r\n Tuesday-Friday: 10:00 AM - 4:30 PM \r\n Saturday-Sunday: 10:00 AM - 6:00 PM '
    ]
    hourText.setAttribute('style', 'white-space: pre;')

    headerText.textContent = ['Baked by Puja']

    copyText.textContent = [
    'Baked by Puja is the best place to buy desserts from whether it\'s for a special occasion or just for a quick bite. From cupcakes to cake pops and cakes to cookies, Puja always has the freshest baked goods available and she never fails to provide great customer service. There\'s no one else I would choose to cater from. She\'s a gem!'
    ]

    headerText.classList.add('header')

    copyText.classList.add('copy');

    hourText.classList.add('copy');

    locationText.classList.add('copy')

    element.appendChild(headerText)
    
    element.appendChild(copyText)
    
    element.appendChild(hourText)
    
    element.appendChild(locationText)

 
    return element;
  }
 document.getElementById('content').appendChild(component());

function createMenu() {
    const element = document.createElement('div');
    const menuText = document.createElement('div');
    const cakesText = document.createElement('div');
    const cupcakesText = document.createElement('div');
    const cakepopsText = document.createElement('div');
    const cookiesText = document.createElement('div');
    const header = document.createElement('div')
    const homeButton = document.createElement('button')
    const menuButton = document.createElement('button')
    const contactButton = document.createElement('button')


    homeButton.textContent = ['Home']
    menuButton.textContent = ['Menu']
    contactButton.textContent = ['Contact']
    homeButton.classList.add('position')
    homeButton.classList.add('tabs')
    menuButton.classList.add('tabs')
    contactButton.classList.add('tabs')
    header.classList.add('position')

    contactButton.addEventListener('click', function() {
        while (element.firstChild) {
            element.removeChild(element.firstChild);   
        }
        document.getElementById('content').appendChild(createContact())
    })

    homeButton.addEventListener('click', function() {
        while (element.firstChild) {
            element.removeChild(element.firstChild);   
        }
    document.getElementById('content').appendChild(component());
    })

    header.appendChild(homeButton)
    header.appendChild(menuButton) 
    header.appendChild(contactButton)

    menuText.textContent = ['Menu/Catering'];
    cakesText.textContent = ['Cakes: $10 for a slice/$65 \r\n \r\n Red Velvet \r\n Vanilla \r\n Chocolate']
    cupcakesText.textContent = ['Cupcakes: $5 each/$50 per dozen \r\n \r\n Red Velvet \r\n Vanilla \r\n Chocolate \r\n Carrot cake \r\n Peanut butter']
    cakepopsText.textContent = ['Cake Pops: $3 each/$25 per dozen \r\n \r\n Red Velvet \r\n Vanilla \r\n Chocolate \r\n Lemon \r\n Birthday \r\n Coconut']
    cookiesText.textContent = ['Cookies: $5 each/$50 per dozen \r\n \r\n Chocolate Chip \r\n Oatmeal Raisin \r\n Snickerdoodles \r\n Peanut butter']

    cakesText.setAttribute('style', 'white-space: pre;')
    cupcakesText.setAttribute('style', 'white-space: pre;')
    cakepopsText.setAttribute('style', 'white-space: pre;')
    cookiesText.setAttribute('style', 'white-space: pre;')

    menuText.classList.add('header')
    cakesText.classList.add('copy')
    cupcakesText.classList.add('copy')
    cakepopsText.classList.add('copy')
    cookiesText.classList.add('copy')

    element.appendChild(header)
    element.appendChild(menuText)
    element.appendChild(cakesText)
    element.appendChild(cupcakesText)
    element.appendChild(cakepopsText)
    element.appendChild(cookiesText)

    return element;
 }


 function createContact() {
    const element = document.createElement('div')
    const contactText = document.createElement('div')
    const contactInformation = document.createElement('div')
    const header = document.createElement('div')
    const homeButton = document.createElement('button')
    const menuButton = document.createElement('button')
    const contactButton = document.createElement('button')

    homeButton.textContent = ['Home']
    menuButton.textContent = ['Menu']
    contactButton.textContent = ['Contact']
    
    homeButton.classList.add('position')
    homeButton.classList.add('tabs')
    menuButton.classList.add('tabs')
    contactButton.classList.add('tabs')
    header.classList.add('position')

    homeButton.addEventListener('click', function() {
        while (element.firstChild) {
            element.removeChild(element.firstChild);   
        }
        document.getElementById('content').appendChild(component());
    })

    menuButton.addEventListener('click', function() {
        while (element.firstChild) {
            element.removeChild(element.firstChild);   
           }
    document.getElementById('content').appendChild(createMenu());
    })

    header.appendChild(homeButton)
    header.appendChild(menuButton) 
    header.appendChild(contactButton)


    element.appendChild(header)

    contactText.textContent = ['Contact Us'];
    contactInformation.textContent = ['Puja \r\n Phone: 405-248-8951 \r\n Email: bakedbypuja@email.com']

    contactInformation.setAttribute('style', 'white-space: pre;')

    contactText.classList.add('header')
    contactInformation.classList.add('copy')

    element.appendChild(contactText)
    element.appendChild(contactInformation)


    return element;

 }