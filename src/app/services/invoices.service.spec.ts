import { TestBed } from '@angular/core/testing';

import { InvoicesService } from './invoices.service';
import { Invoice } from '../interfaces/invoice';

describe('InvoicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [InvoicesService] });
  });

  it('should be created', () => {
    const service = TestBed.get(InvoicesService);
    expect(service).toBeTruthy();
  });

  it('initial state should return totalScreen: false', () => {
    const service = TestBed.get(InvoicesService);
    expect(service.getValue().totalScreen).toEqual(false);
  });

  it('initial state should return invoicesArray: [] }', () => {
    const service = TestBed.get(InvoicesService);
    expect(Array.isArray(service.getValue().invoicesArray)).toEqual(true);
  });

  it('add invoice to invoicesArray should be toBeGreaterThan 0', () => {
    const service = TestBed.get(InvoicesService);
    const invoiceTest: Invoice = {
      id: 1,
      number: 10,
      net: 10,
      tax: 10,
      total: 10,
    }
    service.add(invoiceTest)
    expect(service.getValue().invoicesArray.length).toBeGreaterThan(0);
  })

  it('deleteWork - invoicesArray: [] }', () => {
    const service = TestBed.get(InvoicesService);
    service.deleteWork()
    expect(service.getValue().invoicesArray.length).toEqual(0);
  });

});
