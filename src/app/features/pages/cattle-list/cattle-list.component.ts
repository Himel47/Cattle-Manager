import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { CattleInfo } from '../../models/list.model';
import { ListingService } from './services/listing.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-cattle-list',
  standalone: true,
  imports: [],
  templateUrl: './cattle-list.component.html',
  styleUrl: './cattle-list.component.scss'
})
export class CattleListComponent implements OnInit {

  private listService = inject(ListingService);
  private destroyRef = inject(DestroyRef);
  
  cattleList = signal<CattleInfo[]>([]);
  ngOnInit(): void {
    this.getCattleList();
  }

  getCattleList() {
    this.listService.getCattleList()
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: (res) => this.cattleList.update(()=> res)
      })
  }
}
