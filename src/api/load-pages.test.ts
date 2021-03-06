import config from '../config';
import { loadPages } from './load-pages';
import * as mapDataModule from './map-data'; //eslint-disable-line

jest.mock('./map-data', () => {
  return {
    mapData: jest.fn().mockResolvedValue({ mapped: 1 }),
  };
});

let mockFetch = null;
let mockJson = null;

describe('load-pages', () => {
  beforeEach(() => {
    global.fetch = jest.fn();

    mockJson = jest.fn().mockResolvedValue(Promise.resolve({ toJson: 1 }));

    mockFetch = global.fetch;
    mockFetch.mockResolvedValue(
      Promise.resolve({
        json: mockJson,
      }),
    );
  });

  it('Should call fetch and mapData correctly', async () => {
    const result = await loadPages();
    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith(config.url + '/pages/');
    expect(mockJson).toHaveBeenCalledTimes(1);
    expect(mapDataModule.mapData).toHaveBeenCalledWith({ toJson: 1 });
    expect(result).toEqual({ mapped: 1 });

    jest.clearAllMocks();
  });

  it('Should call fetch with correct slug', async () => {
    await loadPages('atenção testando');
    expect(mockFetch).toHaveBeenCalledWith(config.url + '/pages/?slug=atenotestando');
  });
});
