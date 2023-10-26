const sectionIds = ['#home', '#about', '#skills', '#work', '#testimonials' , '#contact'];
const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map((id) => document.querySelector(`[href="${id}"]`));

console.log(sections);

const options = {
    rootMargin: '-20% 0px 0px 0px',
    threshold: [0, 0.98],
};
const observer = new IntersectionObserver(observerCallback, options);
sections.forEach((section) => observer.observe(section));

const visibleSections = sectionIds.map(()=> false);
let activeNavItem = navItems[0];

function observerCallback(entries){
    let selectLastOne;
    entries.forEach((entry) => {
        const index = sectionIds.indexOf(`#${entry.target.id}`);
        visibleSections[index] = entry.isIntersecting;
        selectLastOne = 
        index === sectionIds.length - 1 &&
        entry.isIntersecting &&
        entry.intersectionRatio >= 0.95;
    });
   console.log(visibleSections);
   console.log('라스트섹션', selectLastOne);

   const navIndex = selectLastOne ? sectionIds.length - 1 : findFirstInterscting(visibleSections);

    const navItem = navItems[navIndex];
    activeNavItem.classList.remove('active');
    activeNavItem = navItem;
    activeNavItem.classList.add('active');
    
   function findFirstInterscting(intersections) {
        const index = intersections.indexOf(true);
        return index >= 0 ? index : 0;
   }


}