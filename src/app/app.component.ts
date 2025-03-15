import { trigger, transition, style, animate } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 })),
      ]),
      transition(':leave', [animate(300, style({ opacity: 0 }))]),
    ]),
  ],
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  constructor(
    public router: Router,
    private renderer: Renderer2,
    private metaService: Meta,
    private titleService: Title,
    private http: HttpClient,
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.CurrentURL = event.url;
        let urlParts = this.CurrentURL.split('/');
        if (urlParts.length > 2) {
          if (urlParts[0] === '') {
            urlParts.shift();
          }
          this.CurrentURL =
            urlParts.slice(0, 1).join('') +
            ' →  ' +
            urlParts.slice(1).join('/');
        } else if (urlParts.length === 2) {
          if (urlParts[0] === '') {
            urlParts.shift();
          }
          this.CurrentURL = urlParts.join(' → ');
        } else {
          this.CurrentURL = urlParts.join('');
        }

        // Extracting PathName
        let pathParts = this.CurrentURL.split('→');
        if (pathParts.length > 1) {
          this.PathName = pathParts[1].split('-').join(' ');
        } else {
          this.PathName = this.CurrentURL.split('/')[1];
          if (!this.PathName) {
            this.PathName = this.router.url.split('-->')[1];
            if (this.PathName) {
              this.PathName = this.PathName.replace(/\/(.+?)\/(.+)/, '→$1→$2');
            }
          }
        }
        if (this.PathName === '  Circular&Notifications') {
          this.PathName = 'Circular & notifications';
        }

        if (this.CurrentURL === 'information →  Circular&Notifications') {
          this.CurrentURL = 'information  →  Circular & Notifications';
        }
        // console.log(this.PathName);
        // console.log(this.CurrentURL);
      }
    });
  }

  @ViewChild('confirmButton') confirmbtn!: ElementRef;

  ngOnInit() {
    this.startSlideShow();
    this.renderer.addClass(document.body, 'light-mode');
    this.setMetaTags();
    console.log(this.setMetaTags());
    this.http.get<{ count: number }>(`${this.apiBaseUrl}/track-visit`).subscribe(response => {
      this.visitCount = response.count;
    });
    // this.trackVisit();
    // this.getVisitorCount();
  }

  // trackVisit(): void {
  //   this.http.post(`${this.apiBaseUrl}/track-visit`, {}).subscribe({
  //     next: () => console.log("Visit tracked"),
  //     error: err => console.error("Error tracking visit:", err)
  //   });
  // }

  // getVisitorCount(): void {
  //   this.http.get<number>(`${this.apiBaseUrl}/get-visitor-count`).subscribe({
  //     next: count => this.visitorCount = count,
  //     error: err => console.error("Error fetching visitor count:", err)
  //   });
  // }
  
  ngAfterViewInit(): void {
    this.confirmbtn.nativeElement.click();
  }
  setMetaTags() {
    this.titleService.setTitle('Daman Municipal Council');
    this.metaService.addTags([
      {
        name: 'description',
        content:
          'Discover the official website of Daman Municipal Council. Get access to municipal services, public notices, local governance updates, and resources for residents of Daman. Stay informed with the latest news and announcements',
      },
      {
        name: 'keywords',
        content:
          'Daman Municipal Council, DMC,  daman online services, daman online Property Tax, DMC Daman, Daman, Daman online property tax,dmc daman,dmc online services',
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Daman Municipal Council' },
    ]);
    this.metaService.updateTag({
      name: 'description',
      content:
        'Discover the official website of Daman Municipal Council. Get access to municipal services, public notices, local governance updates, and resources for residents of Daman. Stay informed with the latest news and announcements',
    });
    this.metaService.updateTag({
      name: 'keywords',
      content:
        'Daman Municipal Council, DMC,  daman online services, daman online Property Tax, DMC Daman, Daman, `Daman online property tax`',
    });
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
  }

  // setMetaTags() {
  //   this.titleService.setTitle('Daman Municipal Council');
  //   this.metaService.updateTag({
  //     name: 'description',
  //     content: 'Discover the official website of Daman Municipal Council. Get access to municipal services, public notices, local governance updates, and resources for residents of Daman. Stay informed with the latest news and announcements'
  //   });
  //   this.metaService.updateTag({
  //     name: 'keywords',
  //     content: 'Daman Municipal Council, DMC, daman online services, daman online Property Tax, DMC Daman, Daman, Daman online property tax'
  //   });
  //   this.metaService.updateTag({
  //     name: 'robots',
  //     content: 'index, follow'
  //   });
  // }

  // #region variable
  IsCititzen: boolean = false;
  IsService: boolean = false;
  IsInformation: boolean = false;
  title = 'DmcDaman';
  CurrentURL?: string;
  PathName?: string;
  darkMode: boolean = false;
  visible: boolean = true;
  showFiller = false;
  currentSlide = 0;
  slideInterval: any;
  isOpen = false;
  visitCount : number = 0;
  showScrollButton: boolean = false;
  @ViewChild('hamburgerCheckbox')
  hamburgerCheckbox!: ElementRef<HTMLInputElement>;
  slides = [
    { background: 'url(/assets/first-image.png)' },
    { background: 'url(/assets/bg2.png)' },
    { background: 'url(/assets/bg3.png)' },
    { background: 'url(/assets/bg4.png)' },
  ];
  // #endregion

  @HostListener('document:click', ['$event'])
  private apiBaseUrl = 'http://192.168.27.58:1122/api';
  closeMenu(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (this.isOpen && !this.hamburgerCheckbox.nativeElement.contains(target)) {
      if (this.IsCititzen || this.IsInformation || this.IsService) {
        this.hamburgerCheckbox.nativeElement.checked = true;
      } else {
        this.hamburgerCheckbox.nativeElement.checked = false;
        this.isOpen = false;
      }
    }
  }

  toggleMenuhamburger() {
    this.isOpen = this.hamburgerCheckbox.nativeElement.checked;
  }

  //#region slide
  startSlideShow() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopSlideShow() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
  //#endregion

  toggleMenu(id: number) {
    switch (id) {
      case 1:
        this.IsService = !this.IsService;
        this.IsInformation = false;
        this.IsCititzen = false;
        break;

      case 2:
        this.IsCititzen = !this.IsCititzen;
        this.IsService = false;
        this.IsInformation = false;
        break;

      case 3:
        this.IsInformation = !this.IsInformation;
        this.IsCititzen = false;
        this.IsService = false;
        break;

      default:
        break;
    }
  }

  //#region navigation bar
  Zoom(id: number) {
    if (id === 3) {
      document.body.classList.remove('normal');
      document.body.classList.remove('zoomout');
      document.body.classList.add('zoomin');
    } else if (id === 2) {
      document.body.classList.remove('zoomout');
      document.body.classList.remove('zoomin');
      document.body.classList.add('normal');
    } else if (id === 1) {
      document.body.classList.remove('normal');
      document.body.classList.remove('zoomin');
      document.body.classList.add('zoomout');
    }
  }

  toggleDarkMode() {
    this.renderer.removeClass(document.body, 'light-mode');
    this.renderer.addClass(document.body, 'dark-mode');
  }

  toggleLightMode() {
    this.renderer.removeClass(document.body, 'dark-mode');
    this.renderer.addClass(document.body, 'light-mode');
  }

  //#endregion

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  checkScroll(): void {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const scrollTrigger = 200;
    this.showScrollButton = scrollPosition >= scrollTrigger;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnDestroy(): void {
    this.stopSlideShow();
  }
}
