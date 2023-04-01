import { TOTAL_SCRN } from './CommanUtil';
import { Subject } from 'rxjs';

export default class ScrollSrvs {
  static scrollHandler = new ScrollSrvs();
   
  // csbc = current Screen BroadCaster
  static csbc = new Subject();

  // csfi = current Screen Fade In
  static csfi = new Subject();

  constructor() {
    // ccsvp = check Current Screen ViewPoint
    window.addEventListener('scroll', this.ccsvp);
  }

  // sthm scroll to Hire me
  sthm = () => {
    // cms = contact me Screen
    let cms = document.getElementById('Contact Me');
    if (!cms) return;
    cms.scrollIntoView({ behavior: 'smooth' });
  };

  // sth = scroll to home
  sth = () => {
    // hs = Home Screen
    let hs = document.getElementById('Home');
    if (!hs) return;
    hs.scrollIntoView({ behavior: 'smooth' });
  };

  // ieiv = is element in view
  ieiv = (elem, type) => {
    let rec = elem.getBoundingClientRect();
    let elementTop = rec.top;
    let elementBottom = rec.bottom;

    // pv = partially visible
    let pv = elementTop < window.innerHeight && elementBottom >= 0;
    // cv = completely visible
    let cv = elementTop >= 0 && elementBottom <= window.innerHeight;

    switch (type) {
      case 'partial':
        return pv;

      case 'complete':
        return cv;

      default:
        return false;
    }
  };

  // sfd = screen from Dom
  // fv = Fully visible
  ccsvp = () => {
    for (let scrn of TOTAL_SCRN) {
      let sfd = document.getElementById(scrn.screen_Name);
      if (!sfd) continue;

      let fv = this.ieiv(sfd, 'complete');
      let partiallyVisible = this.ieiv(sfd, 'partial');

      if (fv || partiallyVisible) {
        if (partiallyVisible && !scrn.alreadyRendered) {
          ScrollSrvs.csfi.next({
            fadeInScrn: scrn.screen_Name,
          });
          scrn.alreadyRendered = true;
          break;
        }

        if (fv) {
          ScrollSrvs.csbc.next({
            screenInView: scrn.screen_Name,
          });
          break;
        }
      }
    }
  };
}
