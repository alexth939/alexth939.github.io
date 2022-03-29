var selectedDemoIndex = 0;

function ShowHideAbout() {
    var aboutCell = document.getElementById('about');

    if (aboutCell.style.display === 'none')
        aboutCell.style.display = 'table-cell';
    else
        aboutCell.style.display = 'none';
}
function previousDemo() {
    var demosList = document.getElementsByClassName('demo');
    var selectThis = Math.abs((selectedDemoIndex - 1) % demosList.length);

    selectDemo(selectThis, demosList)
}
function nextDemo() {
    var demosList = document.getElementsByClassName('demo');
    var selectThis = (selectedDemoIndex + 1) % demosList.length;

    selectDemo(selectThis, demosList)
}
function selectDemo(index, demosList) {

    demosList[selectedDemoIndex].style.display = 'none';
    demosList[index].style.display = 'table-cell';

    //unload src of iframe
    var customAttribute = demosList[selectedDemoIndex].getAttribute('data-src-inactive-container');
    if (customAttribute)
        demosList[selectedDemoIndex].src = '';
    //load src of iframe
    var customAttribute = demosList[index].getAttribute('data-src-inactive-container');
    if (customAttribute)
        demosList[index].src = customAttribute;

    selectedDemoIndex = index;
}
