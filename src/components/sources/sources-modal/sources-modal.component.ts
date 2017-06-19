import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-sources-modal',
  templateUrl: './sources-modal.component.html',
  styleUrls: ['./sources-modal.component.css']
})
export class SourcesModalComponent implements OnInit {
  @Input() article: any;
  url: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.article.url);
  }
}
