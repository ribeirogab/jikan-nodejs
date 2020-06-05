declare module 'jikan-nodejs' {
  namespace anime {
    export function characters(): string;
  }

  namespace manga {
    export function characters(): string;
  }

  namespace genre {
    export function list(
      type: 'anime' | 'manga',
      id: number,
      limit?: number,
      page?: number,
    ): Promise<object[]>;
  }
}
