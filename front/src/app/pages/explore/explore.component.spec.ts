import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListStatesEnum } from '@enums/styleListComponent/ListStateEnum';
import { PodbookCommonService } from '@services/common/common.service';
import { ExploreService } from '@services/explore/explore.service';

import { ExploreComponent } from './explore.component';

describe('ExploreComponent', () => {
  let component: ExploreComponent;
  let fixture: ComponentFixture<ExploreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [HttpClientTestingModule],
      providers: [ExploreService, PodbookCommonService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change style list to grid', () => {
    component.changeStyleList(ListStatesEnum.GRID);
    expect(component.listStyle).toBe(ListStatesEnum.GRID)
  })

  it('should change style list to list', () => {
    component.changeStyleList(ListStatesEnum.LIST);
    expect(component.listStyle).toBe(ListStatesEnum.LIST)
  })
});
