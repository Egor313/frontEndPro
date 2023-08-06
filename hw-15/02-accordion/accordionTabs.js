class AccordionTabs {
    static DEFAULT_OPEN_INDEX = 0;
    static ACCORDION_ITEM_BTN_CLASS = 'accordion-item-btn';
    static ACCORDION_ITEM_CONTENT_CLASS = 'accordion-item-content';
    static ACTIVE_CLASS = 'active';


    constructor(rootEl, defaultOpenIndex = AccordionTabs.DEFAULT_OPEN_INDEX) {
      this.rootEl = rootEl;
      const [navItems, contentItems] = this.rootEl.children

      this.navItems = Array.from(navItems.children);
      this.contentItems = Array.from(contentItems.children);
  
      this.bindStyles();
      this.bindEvents();
      this.setActive(defaultOpenIndex);
    }

    
    bindStyles() {
        this.navItems.forEach((btn) => {
            btn.classList.add(AccordionTabs.ACCORDION_ITEM_BTN_CLASS);
        });

        this.contentItems.forEach((contentItem) => {
            contentItem.classList.add(AccordionTabs.ACCORDION_ITEM_CONTENT_CLASS)
        })
    }
  
    bindEvents() {
      this.rootEl.addEventListener('click', this.onTabClick.bind(this));
    }
  
    onTabClick(e) {
      const target = e.target;
      const navBtn = this.findNavItem(target)
  
      if (navBtn) {
        const navBtnIndex = this.getNavIndex(navBtn);
        
        this.hideActive(this.currentIndex);
        this.setActive(navBtnIndex);
      }
    }

    findNavItem(el) {
      return el.closest('.' + AccordionTabs.ACCORDION_ITEM_BTN_CLASS);
    }

    getNavIndex(navBtn) {
      return this.navItems.indexOf(navBtn);
    }

    setActive(tabIndex) {
      this.currentIndex = tabIndex;

      this.navItems[tabIndex].classList.add(AccordionTabs.ACTIVE_CLASS);
      this.contentItems[tabIndex].classList.add(AccordionTabs.ACTIVE_CLASS);
    }

    hideActive(tabIndex) {
      this.navItems[tabIndex].classList.remove(AccordionTabs.ACTIVE_CLASS);
      this.contentItems[tabIndex].classList.remove(AccordionTabs.ACTIVE_CLASS);
    }
}




