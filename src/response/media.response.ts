export class MediaResponse {
  content: string;
  media_id: string;
  type: number;
  original: MediaOptionOriginal;
  medium: MediaOption;
  thumb: MediaOption;

  constructor(data?: any) {
    this.content = data?.content || '';
    this.media_id = data?.media_id || '';
    this.type = data?.type || 0;
    this.original = new MediaOptionOriginal(data?.original);
    this.medium = new MediaOption(data?.medium);
    this.thumb = new MediaOption(data?.thumb);
  }

  static mapToList(data?: any[]) {
    return data.map((item) => new MediaResponse(item));
  }
}

class MediaOption {
  url: string;
  name: string;
  size: number;
  width: number;
  height: number;

  constructor(data?: any) {
    this.url = data?.url || '';
    this.name = data?.name || '';
    this.size = data?.size || 0;
    this.width = data?.width || 0;
    this.height = data?.height || 0;
  }
}

class MediaOptionOriginal extends MediaOption {
  link_full: string;

  constructor(data?: any) {
    super(data);
    this.link_full = data?.link_full || '';
  }
}
