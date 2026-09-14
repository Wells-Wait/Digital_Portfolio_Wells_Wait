function resizeHeight() {
    const screenHeight = window.innerHeight;
    const items = document.querySelectorAll('.fullHeight');
    
    items.forEach(item => {
        item.style.minHeight = screenHeight*.90 + 'px';
    });

 ;
    items2 = document.querySelectorAll('.halfHeight');
    
    items2.forEach(item2 => {
        item2.style.minHeight = (screenHeight*.40)+ 'px';
    });
}
window.addEventListener('load', resizeHeight);
window.addEventListener('resize', resizeHeight);
resizeHeight();

function updateScrollProgressSpin() {
    const targetElement = document.getElementById('SectionOneRotateingRec');
    if (!targetElement) return;
    
    const rect = targetElement.getBoundingClientRect();
    const elementHeight = targetElement.offsetHeight;
    const windowHeight = window.innerHeight;
    
    // Distance scrolled into the element
    const scrollDistance = windowHeight - rect.top;
    
    // Total distance needed to completely scroll through the element
    const totalScrollable = elementHeight + windowHeight;
    
    // Calculate raw percentage (0 to 100)
    let percentage = (scrollDistance / totalScrollable) * 100;
    percentage = Math.max(0, Math.min(100, percentage));
    
    // Create a 0-to-1 ratio for the color math
    let ratio = percentage / 100;
    
    //console.log(`Progress through SectionTwo: ${percentage.toFixed(1)}%`);
    targetElement.style.transform = `rotate(var(--rotation, ${360 * ratio}deg))`;

    }
    updateScrollProgressSpin()
    
    window.addEventListener('scroll', updateScrollProgressSpin);
    window.addEventListener('resize', updateScrollProgressSpin);

function updateScrollProgress() {
const targetElement = document.getElementById('SectionTwoColorChangeBox');
if (!targetElement) return;

const rect = targetElement.getBoundingClientRect();
const elementHeight = targetElement.offsetHeight;
const windowHeight = window.innerHeight;

// Distance scrolled into the element
const scrollDistance = windowHeight - rect.top;

// Total distance needed to completely scroll through the element
const totalScrollable = elementHeight + windowHeight;

// Calculate raw percentage (0 to 100)
let percentage = (scrollDistance / totalScrollable) * 100;
percentage = Math.max(0, Math.min(100, percentage));

// Create a 0-to-1 ratio for the color math
let ratio = percentage / 100;

//console.log(`Progress through SectionTwo: ${percentage.toFixed(1)}%`);
targetElement.style.backgroundColor = `rgb( ${Math.round(100 * ratio)}, ${Math.round(100 * (1-ratio))}, 40)`;
}

window.addEventListener('scroll', updateScrollProgress);
window.addEventListener('resize', updateScrollProgress);



// Run immediately in case the DOM is already ready
