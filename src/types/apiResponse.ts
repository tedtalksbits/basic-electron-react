export type ApiResponse<T> = {
  _embedded: T[];
  page?: {
    size?: number;
    totalElements?: number;
    totalPages?: number;
    number?: number;
  };
  _links?: {
    self?: {
      href?: string;
    };
    first?: {
      href?: string;
    };
    last?: {
      href?: string;
    };
    next?: {
      href?: string;
    };
    profile?: {
      href?: string;
    };
    search?: {
      href?: string;
    };
  };
};
