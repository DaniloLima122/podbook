import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListStatesEnum } from '@enums/styleListComponent/ListStateEnum';
import { PodbookResponse } from '@pages/studio/types/studioPage';
import { PodbookCommonService } from '@services/common/common.service';
import { HomeService } from '@services/home/home.service';
import { of } from 'rxjs';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let homeService: HomeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        HomeService,
        PodbookCommonService],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    homeService = TestBed.inject(HomeService);
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

  it('should retrieve recent podbook list with request list size param', () => {

    const mockedReturn: PodbookResponse[] = [{} as PodbookResponse];

    const spyGetRecentPodbooks = jest
      .spyOn(homeService, 'recentPodbooks')
      .mockReturnValue(of(mockedReturn));

    component.ngOnInit();

    const limitItemsRequestParam = 8;

    expect(spyGetRecentPodbooks).toHaveBeenCalledWith(limitItemsRequestParam);
    expect(component.homeCards.length).toBeGreaterThan(0)

  })

  it('should retrieve empty recent podbook list with request list size param', () => {

    const mockedReturn: PodbookResponse[] = [];

    const spyGetRecentPodbooks = jest
      .spyOn(homeService, 'recentPodbooks')
      .mockReturnValue(of(mockedReturn));

    component.ngOnInit();

    const limitItemsRequestParam = 8;

    expect(spyGetRecentPodbooks).toHaveBeenCalledWith(limitItemsRequestParam);
    expect(component.homeCards.length).toBe(0)

  })
});
