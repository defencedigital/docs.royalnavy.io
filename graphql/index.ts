export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  page?: Maybe<Page>;
  pageCollection?: Maybe<PageCollection>;
  section?: Maybe<Section>;
  sectionCollection?: Maybe<SectionCollection>;
  codeBlock?: Maybe<CodeBlock>;
  codeBlockCollection?: Maybe<CodeBlockCollection>;
  liveExample?: Maybe<LiveExample>;
  liveExampleCollection?: Maybe<LiveExampleCollection>;
  contentBlock?: Maybe<ContentBlock>;
  contentBlockCollection?: Maybe<ContentBlockCollection>;
  hero?: Maybe<Hero>;
  heroCollection?: Maybe<HeroCollection>;
  apiField?: Maybe<ApiField>;
  apiFieldCollection?: Maybe<ApiFieldCollection>;
  apiTable?: Maybe<ApiTable>;
  apiTableCollection?: Maybe<ApiTableCollection>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryAssetCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<AssetFilter>;
  order?: Maybe<Array<Maybe<AssetOrder>>>;
};


export type QueryPageArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryPageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<PageFilter>;
  order?: Maybe<Array<Maybe<PageOrder>>>;
};


export type QuerySectionArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QuerySectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<SectionFilter>;
  order?: Maybe<Array<Maybe<SectionOrder>>>;
};


export type QueryCodeBlockArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryCodeBlockCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CodeBlockFilter>;
  order?: Maybe<Array<Maybe<CodeBlockOrder>>>;
};


export type QueryLiveExampleArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryLiveExampleCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<LiveExampleFilter>;
  order?: Maybe<Array<Maybe<LiveExampleOrder>>>;
};


export type QueryContentBlockArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryContentBlockCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<ContentBlockFilter>;
  order?: Maybe<Array<Maybe<ContentBlockOrder>>>;
};


export type QueryHeroArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryHeroCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<HeroFilter>;
  order?: Maybe<Array<Maybe<HeroOrder>>>;
};


export type QueryApiFieldArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryApiFieldCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<ApiFieldFilter>;
  order?: Maybe<Array<Maybe<ApiFieldOrder>>>;
};


export type QueryApiTableArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryApiTableCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<ApiTableFilter>;
  order?: Maybe<Array<Maybe<ApiTableOrder>>>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  transform?: Maybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Sys = {
  __typename?: 'Sys';
  id: Scalars['String'];
  spaceId: Scalars['String'];
  environmentId: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
};


export type ImageTransformOptions = {
  /** Desired width in pixels. Defaults to the original image width. */
  width?: Maybe<Scalars['Dimension']>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: Maybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: Maybe<Scalars['Quality']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: Maybe<Scalars['Int']>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: Maybe<ImageResizeStrategy>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: Maybe<ImageResizeFocus>;
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: Maybe<Scalars['HexColor']>;
  /** Desired image format. Defaults to the original image format. */
  format?: Maybe<ImageFormat>;
};



export enum ImageResizeStrategy {
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES'
}


export enum ImageFormat {
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Entry>>;
};

export type Entry = {
  sys: Sys;
};

export type AssetFilter = {
  sys?: Maybe<SysFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  url_exists?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
  url_not?: Maybe<Scalars['String']>;
  url_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_contains?: Maybe<Scalars['String']>;
  url_not_contains?: Maybe<Scalars['String']>;
  size_exists?: Maybe<Scalars['Boolean']>;
  size?: Maybe<Scalars['Int']>;
  size_not?: Maybe<Scalars['Int']>;
  size_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  size_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  size_gt?: Maybe<Scalars['Int']>;
  size_gte?: Maybe<Scalars['Int']>;
  size_lt?: Maybe<Scalars['Int']>;
  size_lte?: Maybe<Scalars['Int']>;
  contentType_exists?: Maybe<Scalars['Boolean']>;
  contentType?: Maybe<Scalars['String']>;
  contentType_not?: Maybe<Scalars['String']>;
  contentType_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentType_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentType_contains?: Maybe<Scalars['String']>;
  contentType_not_contains?: Maybe<Scalars['String']>;
  fileName_exists?: Maybe<Scalars['Boolean']>;
  fileName?: Maybe<Scalars['String']>;
  fileName_not?: Maybe<Scalars['String']>;
  fileName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fileName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fileName_contains?: Maybe<Scalars['String']>;
  fileName_not_contains?: Maybe<Scalars['String']>;
  width_exists?: Maybe<Scalars['Boolean']>;
  width?: Maybe<Scalars['Int']>;
  width_not?: Maybe<Scalars['Int']>;
  width_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  width_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  width_gt?: Maybe<Scalars['Int']>;
  width_gte?: Maybe<Scalars['Int']>;
  width_lt?: Maybe<Scalars['Int']>;
  width_lte?: Maybe<Scalars['Int']>;
  height_exists?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['Int']>;
  height_not?: Maybe<Scalars['Int']>;
  height_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  height_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  height_gt?: Maybe<Scalars['Int']>;
  height_gte?: Maybe<Scalars['Int']>;
  height_lt?: Maybe<Scalars['Int']>;
  height_lte?: Maybe<Scalars['Int']>;
  OR?: Maybe<Array<Maybe<AssetFilter>>>;
  AND?: Maybe<Array<Maybe<AssetFilter>>>;
};

export type SysFilter = {
  id_exists?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_contains?: Maybe<Scalars['String']>;
  id_not_contains?: Maybe<Scalars['String']>;
  publishedAt_exists?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: Maybe<Scalars['Boolean']>;
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_not?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  firstPublishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  firstPublishedAt_gt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_lt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: Maybe<Scalars['DateTime']>;
  publishedVersion_exists?: Maybe<Scalars['Boolean']>;
  publishedVersion?: Maybe<Scalars['Float']>;
  publishedVersion_not?: Maybe<Scalars['Float']>;
  publishedVersion_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  publishedVersion_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  publishedVersion_gt?: Maybe<Scalars['Float']>;
  publishedVersion_gte?: Maybe<Scalars['Float']>;
  publishedVersion_lt?: Maybe<Scalars['Float']>;
  publishedVersion_lte?: Maybe<Scalars['Float']>;
};

export enum AssetOrder {
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type AssetCollection = {
  __typename?: 'AssetCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Asset>>;
};

/** Represents a single navigable route. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/page) */
export type Page = Entry & {
  __typename?: 'Page';
  sys: Sys;
  linkedFrom?: Maybe<PageLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  sectionCollection?: Maybe<PageSectionCollection>;
};


/** Represents a single navigable route. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Represents a single navigable route. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/page) */
export type PageTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a single navigable route. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/page) */
export type PageSectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type PageLinkingCollections = {
  __typename?: 'PageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type PageSectionCollection = {
  __typename?: 'PageSectionCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Section>>;
};

/** Top level content section (e.g. Introduction, Documentation). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/section) */
export type Section = Entry & {
  __typename?: 'Section';
  sys: Sys;
  linkedFrom?: Maybe<SectionLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  contentCollection?: Maybe<SectionContentCollection>;
};


/** Top level content section (e.g. Introduction, Documentation). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/section) */
export type SectionLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Top level content section (e.g. Introduction, Documentation). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/section) */
export type SectionTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Top level content section (e.g. Introduction, Documentation). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/section) */
export type SectionContentCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type SectionLinkingCollections = {
  __typename?: 'SectionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type SectionLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type SectionLinkingCollectionsPageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type PageCollection = {
  __typename?: 'PageCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Page>>;
};

export type SectionContentCollection = {
  __typename?: 'SectionContentCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<SectionContentItem>>;
};

export type SectionContentItem = ApiTable | CodeBlock | ContentBlock | Hero | LiveExample;

/** Display low level APIs (collection of API Fields). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/apiTable) */
export type ApiTable = Entry & {
  __typename?: 'ApiTable';
  sys: Sys;
  linkedFrom?: Maybe<ApiTableLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  apiFieldCollection?: Maybe<ApiTableApiFieldCollection>;
};


/** Display low level APIs (collection of API Fields). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/apiTable) */
export type ApiTableLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Display low level APIs (collection of API Fields). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/apiTable) */
export type ApiTableTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Display low level APIs (collection of API Fields). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/apiTable) */
export type ApiTableDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Display low level APIs (collection of API Fields). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/apiTable) */
export type ApiTableApiFieldCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type ApiTableLinkingCollections = {
  __typename?: 'ApiTableLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type ApiTableLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type ApiTableLinkingCollectionsSectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type SectionCollection = {
  __typename?: 'SectionCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Section>>;
};

export type ApiTableApiFieldCollection = {
  __typename?: 'ApiTableApiFieldCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Entry>>;
};

/** Display source code with syntax highlighting. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/codeBlock) */
export type CodeBlock = Entry & {
  __typename?: 'CodeBlock';
  sys: Sys;
  linkedFrom?: Maybe<CodeBlockLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<CodeBlockDescription>;
  filename?: Maybe<Scalars['String']>;
  sourceCode?: Maybe<Scalars['String']>;
};


/** Display source code with syntax highlighting. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/codeBlock) */
export type CodeBlockLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Display source code with syntax highlighting. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/codeBlock) */
export type CodeBlockTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Display source code with syntax highlighting. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/codeBlock) */
export type CodeBlockDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Display source code with syntax highlighting. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/codeBlock) */
export type CodeBlockFilenameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Display source code with syntax highlighting. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/codeBlock) */
export type CodeBlockSourceCodeArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type CodeBlockLinkingCollections = {
  __typename?: 'CodeBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type CodeBlockLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type CodeBlockLinkingCollectionsSectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type CodeBlockDescription = {
  __typename?: 'CodeBlockDescription';
  json: Scalars['JSON'];
  links: CodeBlockDescriptionLinks;
};


export type CodeBlockDescriptionLinks = {
  __typename?: 'CodeBlockDescriptionLinks';
  entries: CodeBlockDescriptionEntries;
  assets: CodeBlockDescriptionAssets;
};

export type CodeBlockDescriptionEntries = {
  __typename?: 'CodeBlockDescriptionEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type CodeBlockDescriptionAssets = {
  __typename?: 'CodeBlockDescriptionAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

/** Display arbitrary markdown content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/contentBlock) */
export type ContentBlock = Entry & {
  __typename?: 'ContentBlock';
  sys: Sys;
  linkedFrom?: Maybe<ContentBlockLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<ContentBlockDescription>;
};


/** Display arbitrary markdown content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/contentBlock) */
export type ContentBlockLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Display arbitrary markdown content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/contentBlock) */
export type ContentBlockTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Display arbitrary markdown content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/contentBlock) */
export type ContentBlockDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type ContentBlockLinkingCollections = {
  __typename?: 'ContentBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type ContentBlockLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentBlockLinkingCollectionsSectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentBlockDescription = {
  __typename?: 'ContentBlockDescription';
  json: Scalars['JSON'];
  links: ContentBlockDescriptionLinks;
};

export type ContentBlockDescriptionLinks = {
  __typename?: 'ContentBlockDescriptionLinks';
  entries: ContentBlockDescriptionEntries;
  assets: ContentBlockDescriptionAssets;
};

export type ContentBlockDescriptionEntries = {
  __typename?: 'ContentBlockDescriptionEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type ContentBlockDescriptionAssets = {
  __typename?: 'ContentBlockDescriptionAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

/** Display introduction at the very top of the page. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/hero) */
export type Hero = Entry & {
  __typename?: 'Hero';
  sys: Sys;
  linkedFrom?: Maybe<HeroLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};


/** Display introduction at the very top of the page. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/hero) */
export type HeroLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Display introduction at the very top of the page. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/hero) */
export type HeroTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Display introduction at the very top of the page. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/hero) */
export type HeroDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type HeroLinkingCollections = {
  __typename?: 'HeroLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type HeroLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type HeroLinkingCollectionsSectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

/** Display an interactive example of component or collection of components. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/liveExample) */
export type LiveExample = Entry & {
  __typename?: 'LiveExample';
  sys: Sys;
  linkedFrom?: Maybe<LiveExampleLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<LiveExampleDescription>;
};


/** Display an interactive example of component or collection of components. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/liveExample) */
export type LiveExampleLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Display an interactive example of component or collection of components. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/liveExample) */
export type LiveExampleTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Display an interactive example of component or collection of components. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/liveExample) */
export type LiveExampleDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type LiveExampleLinkingCollections = {
  __typename?: 'LiveExampleLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type LiveExampleLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type LiveExampleLinkingCollectionsSectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type LiveExampleDescription = {
  __typename?: 'LiveExampleDescription';
  json: Scalars['JSON'];
  links: LiveExampleDescriptionLinks;
};

export type LiveExampleDescriptionLinks = {
  __typename?: 'LiveExampleDescriptionLinks';
  entries: LiveExampleDescriptionEntries;
  assets: LiveExampleDescriptionAssets;
};

export type LiveExampleDescriptionEntries = {
  __typename?: 'LiveExampleDescriptionEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type LiveExampleDescriptionAssets = {
  __typename?: 'LiveExampleDescriptionAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type PageFilter = {
  sys?: Maybe<SysFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  sectionCollection_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<PageFilter>>>;
  AND?: Maybe<Array<Maybe<PageFilter>>>;
};

export enum PageOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type SectionFilter = {
  sys?: Maybe<SysFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  contentCollection_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<SectionFilter>>>;
  AND?: Maybe<Array<Maybe<SectionFilter>>>;
};

export enum SectionOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type CodeBlockFilter = {
  sys?: Maybe<SysFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  filename_exists?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<Scalars['String']>;
  filename_not?: Maybe<Scalars['String']>;
  filename_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  filename_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  filename_contains?: Maybe<Scalars['String']>;
  filename_not_contains?: Maybe<Scalars['String']>;
  sourceCode_exists?: Maybe<Scalars['Boolean']>;
  sourceCode?: Maybe<Scalars['String']>;
  sourceCode_not?: Maybe<Scalars['String']>;
  sourceCode_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  sourceCode_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  sourceCode_contains?: Maybe<Scalars['String']>;
  sourceCode_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<CodeBlockFilter>>>;
  AND?: Maybe<Array<Maybe<CodeBlockFilter>>>;
};

export enum CodeBlockOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  FilenameAsc = 'filename_ASC',
  FilenameDesc = 'filename_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type CodeBlockCollection = {
  __typename?: 'CodeBlockCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<CodeBlock>>;
};

export type LiveExampleFilter = {
  sys?: Maybe<SysFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<LiveExampleFilter>>>;
  AND?: Maybe<Array<Maybe<LiveExampleFilter>>>;
};

export enum LiveExampleOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type LiveExampleCollection = {
  __typename?: 'LiveExampleCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<LiveExample>>;
};

export type ContentBlockFilter = {
  sys?: Maybe<SysFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<ContentBlockFilter>>>;
  AND?: Maybe<Array<Maybe<ContentBlockFilter>>>;
};

export enum ContentBlockOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ContentBlockCollection = {
  __typename?: 'ContentBlockCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<ContentBlock>>;
};

export type HeroFilter = {
  sys?: Maybe<SysFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<HeroFilter>>>;
  AND?: Maybe<Array<Maybe<HeroFilter>>>;
};

export enum HeroOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type HeroCollection = {
  __typename?: 'HeroCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Hero>>;
};

/** Singular API Field (makes up API Table). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/apiField) */
export type ApiField = Entry & {
  __typename?: 'ApiField';
  sys: Sys;
  linkedFrom?: Maybe<ApiFieldLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  dataType?: Maybe<Scalars['String']>;
  defaultValue?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['Boolean']>;
};


/** Singular API Field (makes up API Table). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/apiField) */
export type ApiFieldLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Singular API Field (makes up API Table). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/apiField) */
export type ApiFieldNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Singular API Field (makes up API Table). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/apiField) */
export type ApiFieldDataTypeArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Singular API Field (makes up API Table). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/apiField) */
export type ApiFieldDefaultValueArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Singular API Field (makes up API Table). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/apiField) */
export type ApiFieldDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Singular API Field (makes up API Table). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/apiField) */
export type ApiFieldRequiredArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type ApiFieldLinkingCollections = {
  __typename?: 'ApiFieldLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ApiFieldLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type ApiFieldFilter = {
  sys?: Maybe<SysFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  dataType_exists?: Maybe<Scalars['Boolean']>;
  dataType?: Maybe<Scalars['String']>;
  dataType_not?: Maybe<Scalars['String']>;
  dataType_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  dataType_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  dataType_contains?: Maybe<Scalars['String']>;
  dataType_not_contains?: Maybe<Scalars['String']>;
  defaultValue_exists?: Maybe<Scalars['Boolean']>;
  defaultValue?: Maybe<Scalars['String']>;
  defaultValue_not?: Maybe<Scalars['String']>;
  defaultValue_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  defaultValue_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  defaultValue_contains?: Maybe<Scalars['String']>;
  defaultValue_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  required_exists?: Maybe<Scalars['Boolean']>;
  required?: Maybe<Scalars['Boolean']>;
  required_not?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<ApiFieldFilter>>>;
  AND?: Maybe<Array<Maybe<ApiFieldFilter>>>;
};

export enum ApiFieldOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  DataTypeAsc = 'dataType_ASC',
  DataTypeDesc = 'dataType_DESC',
  DefaultValueAsc = 'defaultValue_ASC',
  DefaultValueDesc = 'defaultValue_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  RequiredAsc = 'required_ASC',
  RequiredDesc = 'required_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ApiFieldCollection = {
  __typename?: 'ApiFieldCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<ApiField>>;
};

export type ApiTableFilter = {
  sys?: Maybe<SysFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  apiFieldCollection_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<ApiTableFilter>>>;
  AND?: Maybe<Array<Maybe<ApiTableFilter>>>;
};

export enum ApiTableOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ApiTableCollection = {
  __typename?: 'ApiTableCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<ApiTable>>;
};

export type PageStructureQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type PageStructureQuery = (
  { __typename?: 'Query' }
  & { page?: Maybe<(
    { __typename?: 'Page' }
    & Pick<Page, 'title'>
    & { sectionCollection?: Maybe<(
      { __typename?: 'PageSectionCollection' }
      & { items: Array<Maybe<(
        { __typename?: 'Section' }
        & Pick<Section, 'title'>
        & { sys: (
          { __typename?: 'Sys' }
          & Pick<Sys, 'id'>
        ), contentCollection?: Maybe<(
          { __typename?: 'SectionContentCollection' }
          & { items: Array<Maybe<(
            { __typename: 'ApiTable' }
            & { sys: (
              { __typename?: 'Sys' }
              & Pick<Sys, 'id'>
            ) }
          ) | (
            { __typename: 'CodeBlock' }
            & { sys: (
              { __typename?: 'Sys' }
              & Pick<Sys, 'id'>
            ) }
          ) | (
            { __typename: 'ContentBlock' }
            & { sys: (
              { __typename?: 'Sys' }
              & Pick<Sys, 'id'>
            ) }
          ) | (
            { __typename: 'Hero' }
            & { sys: (
              { __typename?: 'Sys' }
              & Pick<Sys, 'id'>
            ) }
          ) | (
            { __typename: 'LiveExample' }
            & { sys: (
              { __typename?: 'Sys' }
              & Pick<Sys, 'id'>
            ) }
          )>> }
        )> }
      )>> }
    )> }
  )> }
);

export type SectionContentQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SectionContentQuery = (
  { __typename?: 'Query' }
  & { section?: Maybe<(
    { __typename?: 'Section' }
    & Pick<Section, 'title'>
    & { contentCollection?: Maybe<(
      { __typename?: 'SectionContentCollection' }
      & { items: Array<Maybe<(
        { __typename: 'ApiTable' }
        & { apiTableDescription: ApiTable['description'] }
        & { sys: (
          { __typename?: 'Sys' }
          & Pick<Sys, 'id'>
        ), apiFieldCollection?: Maybe<(
          { __typename?: 'ApiTableApiFieldCollection' }
          & { items: Array<Maybe<{ __typename?: 'Page' } | { __typename?: 'Section' } | { __typename?: 'ApiTable' } | { __typename?: 'CodeBlock' } | { __typename?: 'ContentBlock' } | { __typename?: 'Hero' } | { __typename?: 'LiveExample' } | (
            { __typename?: 'ApiField' }
            & Pick<ApiField, 'name' | 'dataType' | 'defaultValue' | 'description' | 'required'>
          )>> }
        )> }
      ) | (
        { __typename: 'CodeBlock' }
        & Pick<CodeBlock, 'filename' | 'sourceCode'>
        & { sys: (
          { __typename?: 'Sys' }
          & Pick<Sys, 'id'>
        ), description?: Maybe<(
          { __typename?: 'CodeBlockDescription' }
          & Pick<CodeBlockDescription, 'json'>
        )> }
      ) | (
        { __typename: 'ContentBlock' }
        & { sys: (
          { __typename?: 'Sys' }
          & Pick<Sys, 'id'>
        ), description?: Maybe<(
          { __typename?: 'ContentBlockDescription' }
          & Pick<ContentBlockDescription, 'json'>
          & { links: (
            { __typename?: 'ContentBlockDescriptionLinks' }
            & { assets: (
              { __typename?: 'ContentBlockDescriptionAssets' }
              & { block: Array<Maybe<(
                { __typename?: 'Asset' }
                & Pick<Asset, 'fileName' | 'title' | 'description' | 'url'>
                & { sys: (
                  { __typename?: 'Sys' }
                  & Pick<Sys, 'id'>
                ) }
              )>> }
            ) }
          ) }
        )> }
      ) | (
        { __typename: 'Hero' }
        & { heroDescription: Hero['description'] }
        & { sys: (
          { __typename?: 'Sys' }
          & Pick<Sys, 'id'>
        ) }
      ) | (
        { __typename: 'LiveExample' }
        & { sys: (
          { __typename?: 'Sys' }
          & Pick<Sys, 'id'>
        ), description?: Maybe<(
          { __typename?: 'LiveExampleDescription' }
          & Pick<LiveExampleDescription, 'json'>
        )> }
      )>> }
    )> }
  )> }
);