import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type Article = Document & {
  __typename?: 'Article';
  /** Date the document was created */
  _createdAt: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id: Maybe<Scalars['ID']['output']>;
  _key: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt: Maybe<Scalars['DateTime']['output']>;
  articleType: Maybe<Scalars['String']['output']>;
  category: Maybe<Category>;
  contents: Maybe<Array<Maybe<ArticleContent>>>;
  cta: Maybe<PageBuilderCta>;
  image: Maybe<Image>;
  keyTakeaways: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  person: Maybe<Person>;
  seo: Maybe<Seo>;
  slug: Maybe<Slug>;
  /** Leave it blank to use the calcualtion time from the script */
  timeToRead: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};

export type ArticleContent = {
  __typename?: 'ArticleContent';
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  portableTextImageRaw: Maybe<Scalars['JSON']['output']>;
};

export type ArticleContentFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
};

export type ArticleContentSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
};

export type ArticleFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  articleType?: InputMaybe<StringFilter>;
  category?: InputMaybe<CategoryFilter>;
  cta?: InputMaybe<PageBuilderCtaFilter>;
  image?: InputMaybe<ImageFilter>;
  person?: InputMaybe<PersonFilter>;
  seo?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  timeToRead?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ArticleOrBuilderOrHouseDesignOrPage = Article | Builder | HouseDesign | Page;

export type ArticleSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  articleType?: InputMaybe<SortOrder>;
  cta?: InputMaybe<PageBuilderCtaSorting>;
  image?: InputMaybe<ImageSorting>;
  seo?: InputMaybe<SeoSorting>;
  slug?: InputMaybe<SlugSorting>;
  timeToRead?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Block = {
  __typename?: 'Block';
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  children: Maybe<Array<Maybe<Span>>>;
  level: Maybe<Scalars['Float']['output']>;
  listItem: Maybe<Scalars['String']['output']>;
  style: Maybe<Scalars['String']['output']>;
};

export type BlockOrImage = Block | Image;

export type BooleanFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Builder = Document & {
  __typename?: 'Builder';
  /** Date the document was created */
  _createdAt: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id: Maybe<Scalars['ID']['output']>;
  _key: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt: Maybe<Scalars['DateTime']['output']>;
  address: Maybe<Geopoint>;
  awards: Maybe<Array<Maybe<Image>>>;
  description: Maybe<Scalars['String']['output']>;
  licenseNo: Maybe<Scalars['String']['output']>;
  locations: Maybe<Array<Maybe<Location>>>;
  logo: Maybe<Image>;
  seo: Maybe<Seo>;
  sinceYear: Maybe<Scalars['Float']['output']>;
  slug: Maybe<Slug>;
  title: Maybe<Scalars['String']['output']>;
  website: Maybe<Scalars['String']['output']>;
};

export type BuilderFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  address?: InputMaybe<GeopointFilter>;
  description?: InputMaybe<StringFilter>;
  licenseNo?: InputMaybe<StringFilter>;
  logo?: InputMaybe<ImageFilter>;
  seo?: InputMaybe<SeoFilter>;
  sinceYear?: InputMaybe<FloatFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
  website?: InputMaybe<StringFilter>;
};

export type BuilderSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  address?: InputMaybe<GeopointSorting>;
  description?: InputMaybe<SortOrder>;
  licenseNo?: InputMaybe<SortOrder>;
  logo?: InputMaybe<ImageSorting>;
  seo?: InputMaybe<SeoSorting>;
  sinceYear?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SlugSorting>;
  title?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrder>;
};

export type Category = Document & {
  __typename?: 'Category';
  /** Date the document was created */
  _createdAt: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id: Maybe<Scalars['ID']['output']>;
  _key: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt: Maybe<Scalars['DateTime']['output']>;
  name: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};

export type CategoryFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  name?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type CategorySorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type CrossDatasetReference = {
  __typename?: 'CrossDatasetReference';
  _dataset: Maybe<Scalars['String']['output']>;
  _key: Maybe<Scalars['String']['output']>;
  _projectId: Maybe<Scalars['String']['output']>;
  _ref: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  _weak: Maybe<Scalars['Boolean']['output']>;
};

export type CrossDatasetReferenceFilter = {
  _dataset?: InputMaybe<StringFilter>;
  _key?: InputMaybe<StringFilter>;
  _projectId?: InputMaybe<StringFilter>;
  _ref?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _weak?: InputMaybe<BooleanFilter>;
};

export type CrossDatasetReferenceSorting = {
  _dataset?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _projectId?: InputMaybe<SortOrder>;
  _ref?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _weak?: InputMaybe<SortOrder>;
};

export type DateFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Date']['input']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['Date']['input']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['Date']['input']>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['Date']['input']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['Date']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Date']['input']>;
};

export type DatetimeFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** A Sanity document */
export type Document = {
  /** Date the document was created */
  _createdAt: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id: Maybe<Scalars['ID']['output']>;
  /** Current document revision */
  _rev: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type DocumentFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
};

export type DocumentSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
};

export type File = {
  __typename?: 'File';
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  asset: Maybe<SanityFileAsset>;
};

export type FileFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  asset?: InputMaybe<SanityFileAssetFilter>;
};

export type FileSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
};

export type FloatFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Float']['input']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['Float']['input']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['Float']['input']>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['Float']['input']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['Float']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Float']['input']>;
};

export type FooterLink = {
  __typename?: 'FooterLink';
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  link: Maybe<Link>;
};

export type FooterLinkFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  link?: InputMaybe<LinkFilter>;
};

export type FooterLinkGroup = {
  __typename?: 'FooterLinkGroup';
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  children: Maybe<Array<Maybe<FooterLink>>>;
  title: Maybe<Scalars['String']['output']>;
};

export type FooterLinkGroupFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type FooterLinkGroupSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type FooterLinkSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  link?: InputMaybe<LinkSorting>;
};

export type FooterSocialLink = {
  __typename?: 'FooterSocialLink';
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  footerSocialLink: Maybe<Scalars['String']['output']>;
  icon: Maybe<Scalars['String']['output']>;
};

export type FooterSocialLinkFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  footerSocialLink?: InputMaybe<StringFilter>;
  icon?: InputMaybe<StringFilter>;
};

export type FooterSocialLinkSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  footerSocialLink?: InputMaybe<SortOrder>;
  icon?: InputMaybe<SortOrder>;
};

export type Geopoint = {
  __typename?: 'Geopoint';
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  alt: Maybe<Scalars['Float']['output']>;
  lat: Maybe<Scalars['Float']['output']>;
  lng: Maybe<Scalars['Float']['output']>;
};

export type GeopointFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  alt?: InputMaybe<FloatFilter>;
  lat?: InputMaybe<FloatFilter>;
  lng?: InputMaybe<FloatFilter>;
};

export type GeopointSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  alt?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
};

export type HouseDesign = Document & {
  __typename?: 'HouseDesign';
  /** Date the document was created */
  _createdAt: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id: Maybe<Scalars['ID']['output']>;
  _key: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt: Maybe<Scalars['DateTime']['output']>;
  alarm: Maybe<Scalars['Boolean']['output']>;
  alfresco: Maybe<Scalars['Boolean']['output']>;
  balcony: Maybe<Scalars['Boolean']['output']>;
  bathroomStoneBenchtop: Maybe<Scalars['Boolean']['output']>;
  bedrooms: Maybe<Scalars['Float']['output']>;
  blinds: Maybe<Scalars['Boolean']['output']>;
  brochure: Maybe<File>;
  builder: Maybe<Builder>;
  butlerPantry: Maybe<Scalars['Boolean']['output']>;
  ceilingFans: Maybe<Scalars['Boolean']['output']>;
  clothesline: Maybe<Scalars['Boolean']['output']>;
  colourbondRoof: Maybe<Scalars['Boolean']['output']>;
  cooktop: Maybe<Scalars['Boolean']['output']>;
  dataPoints: Maybe<Scalars['Boolean']['output']>;
  dishwasher: Maybe<Scalars['Boolean']['output']>;
  dishwasherMicrowaveProvision: Maybe<Scalars['Boolean']['output']>;
  downLights: Maybe<Scalars['Boolean']['output']>;
  driveway: Maybe<Scalars['Boolean']['output']>;
  dualOccupancy: Maybe<Scalars['Boolean']['output']>;
  ductedAirConditioning: Maybe<Scalars['Boolean']['output']>;
  duplex: Maybe<Scalars['Boolean']['output']>;
  ensuiteDoor: Maybe<Scalars['Boolean']['output']>;
  featureWalls: Maybe<Scalars['Boolean']['output']>;
  fencing: Maybe<Scalars['Boolean']['output']>;
  finalOccupationCertificate: Maybe<Scalars['Boolean']['output']>;
  floorPlans: Maybe<Array<Maybe<File>>>;
  floorToCeilingTiles: Maybe<Scalars['Boolean']['output']>;
  flooring: Maybe<Scalars['Boolean']['output']>;
  flyscreens: Maybe<Scalars['Boolean']['output']>;
  framelessShowerScreen: Maybe<Scalars['Boolean']['output']>;
  garage: Maybe<Scalars['Float']['output']>;
  gasPoint: Maybe<Scalars['Boolean']['output']>;
  grannyFlat: Maybe<Scalars['Boolean']['output']>;
  homeTheatre: Maybe<Scalars['Boolean']['output']>;
  homestead: Maybe<Scalars['Boolean']['output']>;
  houseSize: Maybe<Scalars['Float']['output']>;
  interimOccupationCertificate: Maybe<Scalars['Boolean']['output']>;
  kitchenGlassSplashback: Maybe<Scalars['Boolean']['output']>;
  kitchenStoneBenchtop: Maybe<Scalars['Boolean']['output']>;
  knockdownRebuild: Maybe<Scalars['Boolean']['output']>;
  landscaping: Maybe<Scalars['Boolean']['output']>;
  laundryChute: Maybe<Scalars['Boolean']['output']>;
  letterbox: Maybe<Scalars['Boolean']['output']>;
  lights: Maybe<Scalars['Boolean']['output']>;
  livingRooms: Maybe<Scalars['Float']['output']>;
  microwave: Maybe<Scalars['Boolean']['output']>;
  minBlockLength: Maybe<Scalars['Float']['output']>;
  minBlockWidth: Maybe<Scalars['Float']['output']>;
  narrowDesign: Maybe<Scalars['Boolean']['output']>;
  nichesAlcoves: Maybe<Scalars['Boolean']['output']>;
  otherPermitsRatings: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  outdoorUpDownLights: Maybe<Scalars['Boolean']['output']>;
  oven: Maybe<Scalars['Boolean']['output']>;
  overheadCupboards: Maybe<Scalars['Boolean']['output']>;
  overview: Maybe<Scalars['String']['output']>;
  photos: Maybe<Array<Maybe<Image>>>;
  powderRoom: Maybe<Scalars['Boolean']['output']>;
  rainwaterTank: Maybe<Scalars['Boolean']['output']>;
  raisedCeiling: Maybe<Scalars['Boolean']['output']>;
  rangehood: Maybe<Scalars['Boolean']['output']>;
  rearMasterBedroom: Maybe<Scalars['Boolean']['output']>;
  rumpus: Maybe<Scalars['Boolean']['output']>;
  sarking: Maybe<Scalars['Boolean']['output']>;
  securityScreens: Maybe<Scalars['Boolean']['output']>;
  separateLivingDining: Maybe<Scalars['Boolean']['output']>;
  separateToilet: Maybe<Scalars['Boolean']['output']>;
  serviceConnections: Maybe<Scalars['Boolean']['output']>;
  smokeDetectors: Maybe<Scalars['Boolean']['output']>;
  softCloseDrawers: Maybe<Scalars['Boolean']['output']>;
  softCloseToiletSeat: Maybe<Scalars['Boolean']['output']>;
  splitLevel: Maybe<Scalars['Boolean']['output']>;
  splitSystemAirConditioning: Maybe<Scalars['Boolean']['output']>;
  steelFrame: Maybe<Scalars['Boolean']['output']>;
  storey: Maybe<Scalars['Float']['output']>;
  study: Maybe<Scalars['Boolean']['output']>;
  tVAntenna: Maybe<Scalars['Boolean']['output']>;
  telephonePoints: Maybe<Scalars['Boolean']['output']>;
  termiteTreatedTimber: Maybe<Scalars['Boolean']['output']>;
  tileRoof: Maybe<Scalars['Boolean']['output']>;
  tilingToAlfresco: Maybe<Scalars['Boolean']['output']>;
  title: Maybe<Scalars['String']['output']>;
  tvPoints: Maybe<Scalars['Boolean']['output']>;
  walkInLinen: Maybe<Scalars['Boolean']['output']>;
  walkInPantry: Maybe<Scalars['Boolean']['output']>;
  walkInRobe: Maybe<Scalars['Boolean']['output']>;
};

export type HouseDesignFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  alarm?: InputMaybe<BooleanFilter>;
  alfresco?: InputMaybe<BooleanFilter>;
  balcony?: InputMaybe<BooleanFilter>;
  bathroomStoneBenchtop?: InputMaybe<BooleanFilter>;
  bedrooms?: InputMaybe<FloatFilter>;
  blinds?: InputMaybe<BooleanFilter>;
  brochure?: InputMaybe<FileFilter>;
  builder?: InputMaybe<BuilderFilter>;
  butlerPantry?: InputMaybe<BooleanFilter>;
  ceilingFans?: InputMaybe<BooleanFilter>;
  clothesline?: InputMaybe<BooleanFilter>;
  colourbondRoof?: InputMaybe<BooleanFilter>;
  cooktop?: InputMaybe<BooleanFilter>;
  dataPoints?: InputMaybe<BooleanFilter>;
  dishwasher?: InputMaybe<BooleanFilter>;
  dishwasherMicrowaveProvision?: InputMaybe<BooleanFilter>;
  downLights?: InputMaybe<BooleanFilter>;
  driveway?: InputMaybe<BooleanFilter>;
  dualOccupancy?: InputMaybe<BooleanFilter>;
  ductedAirConditioning?: InputMaybe<BooleanFilter>;
  duplex?: InputMaybe<BooleanFilter>;
  ensuiteDoor?: InputMaybe<BooleanFilter>;
  featureWalls?: InputMaybe<BooleanFilter>;
  fencing?: InputMaybe<BooleanFilter>;
  finalOccupationCertificate?: InputMaybe<BooleanFilter>;
  floorToCeilingTiles?: InputMaybe<BooleanFilter>;
  flooring?: InputMaybe<BooleanFilter>;
  flyscreens?: InputMaybe<BooleanFilter>;
  framelessShowerScreen?: InputMaybe<BooleanFilter>;
  garage?: InputMaybe<FloatFilter>;
  gasPoint?: InputMaybe<BooleanFilter>;
  grannyFlat?: InputMaybe<BooleanFilter>;
  homeTheatre?: InputMaybe<BooleanFilter>;
  homestead?: InputMaybe<BooleanFilter>;
  houseSize?: InputMaybe<FloatFilter>;
  interimOccupationCertificate?: InputMaybe<BooleanFilter>;
  kitchenGlassSplashback?: InputMaybe<BooleanFilter>;
  kitchenStoneBenchtop?: InputMaybe<BooleanFilter>;
  knockdownRebuild?: InputMaybe<BooleanFilter>;
  landscaping?: InputMaybe<BooleanFilter>;
  laundryChute?: InputMaybe<BooleanFilter>;
  letterbox?: InputMaybe<BooleanFilter>;
  lights?: InputMaybe<BooleanFilter>;
  livingRooms?: InputMaybe<FloatFilter>;
  microwave?: InputMaybe<BooleanFilter>;
  minBlockLength?: InputMaybe<FloatFilter>;
  minBlockWidth?: InputMaybe<FloatFilter>;
  narrowDesign?: InputMaybe<BooleanFilter>;
  nichesAlcoves?: InputMaybe<BooleanFilter>;
  outdoorUpDownLights?: InputMaybe<BooleanFilter>;
  oven?: InputMaybe<BooleanFilter>;
  overheadCupboards?: InputMaybe<BooleanFilter>;
  overview?: InputMaybe<StringFilter>;
  powderRoom?: InputMaybe<BooleanFilter>;
  rainwaterTank?: InputMaybe<BooleanFilter>;
  raisedCeiling?: InputMaybe<BooleanFilter>;
  rangehood?: InputMaybe<BooleanFilter>;
  rearMasterBedroom?: InputMaybe<BooleanFilter>;
  rumpus?: InputMaybe<BooleanFilter>;
  sarking?: InputMaybe<BooleanFilter>;
  securityScreens?: InputMaybe<BooleanFilter>;
  separateLivingDining?: InputMaybe<BooleanFilter>;
  separateToilet?: InputMaybe<BooleanFilter>;
  serviceConnections?: InputMaybe<BooleanFilter>;
  smokeDetectors?: InputMaybe<BooleanFilter>;
  softCloseDrawers?: InputMaybe<BooleanFilter>;
  softCloseToiletSeat?: InputMaybe<BooleanFilter>;
  splitLevel?: InputMaybe<BooleanFilter>;
  splitSystemAirConditioning?: InputMaybe<BooleanFilter>;
  steelFrame?: InputMaybe<BooleanFilter>;
  storey?: InputMaybe<FloatFilter>;
  study?: InputMaybe<BooleanFilter>;
  tVAntenna?: InputMaybe<BooleanFilter>;
  telephonePoints?: InputMaybe<BooleanFilter>;
  termiteTreatedTimber?: InputMaybe<BooleanFilter>;
  tileRoof?: InputMaybe<BooleanFilter>;
  tilingToAlfresco?: InputMaybe<BooleanFilter>;
  title?: InputMaybe<StringFilter>;
  tvPoints?: InputMaybe<BooleanFilter>;
  walkInLinen?: InputMaybe<BooleanFilter>;
  walkInPantry?: InputMaybe<BooleanFilter>;
  walkInRobe?: InputMaybe<BooleanFilter>;
};

export type HouseDesignSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  alarm?: InputMaybe<SortOrder>;
  alfresco?: InputMaybe<SortOrder>;
  balcony?: InputMaybe<SortOrder>;
  bathroomStoneBenchtop?: InputMaybe<SortOrder>;
  bedrooms?: InputMaybe<SortOrder>;
  blinds?: InputMaybe<SortOrder>;
  brochure?: InputMaybe<FileSorting>;
  butlerPantry?: InputMaybe<SortOrder>;
  ceilingFans?: InputMaybe<SortOrder>;
  clothesline?: InputMaybe<SortOrder>;
  colourbondRoof?: InputMaybe<SortOrder>;
  cooktop?: InputMaybe<SortOrder>;
  dataPoints?: InputMaybe<SortOrder>;
  dishwasher?: InputMaybe<SortOrder>;
  dishwasherMicrowaveProvision?: InputMaybe<SortOrder>;
  downLights?: InputMaybe<SortOrder>;
  driveway?: InputMaybe<SortOrder>;
  dualOccupancy?: InputMaybe<SortOrder>;
  ductedAirConditioning?: InputMaybe<SortOrder>;
  duplex?: InputMaybe<SortOrder>;
  ensuiteDoor?: InputMaybe<SortOrder>;
  featureWalls?: InputMaybe<SortOrder>;
  fencing?: InputMaybe<SortOrder>;
  finalOccupationCertificate?: InputMaybe<SortOrder>;
  floorToCeilingTiles?: InputMaybe<SortOrder>;
  flooring?: InputMaybe<SortOrder>;
  flyscreens?: InputMaybe<SortOrder>;
  framelessShowerScreen?: InputMaybe<SortOrder>;
  garage?: InputMaybe<SortOrder>;
  gasPoint?: InputMaybe<SortOrder>;
  grannyFlat?: InputMaybe<SortOrder>;
  homeTheatre?: InputMaybe<SortOrder>;
  homestead?: InputMaybe<SortOrder>;
  houseSize?: InputMaybe<SortOrder>;
  interimOccupationCertificate?: InputMaybe<SortOrder>;
  kitchenGlassSplashback?: InputMaybe<SortOrder>;
  kitchenStoneBenchtop?: InputMaybe<SortOrder>;
  knockdownRebuild?: InputMaybe<SortOrder>;
  landscaping?: InputMaybe<SortOrder>;
  laundryChute?: InputMaybe<SortOrder>;
  letterbox?: InputMaybe<SortOrder>;
  lights?: InputMaybe<SortOrder>;
  livingRooms?: InputMaybe<SortOrder>;
  microwave?: InputMaybe<SortOrder>;
  minBlockLength?: InputMaybe<SortOrder>;
  minBlockWidth?: InputMaybe<SortOrder>;
  narrowDesign?: InputMaybe<SortOrder>;
  nichesAlcoves?: InputMaybe<SortOrder>;
  outdoorUpDownLights?: InputMaybe<SortOrder>;
  oven?: InputMaybe<SortOrder>;
  overheadCupboards?: InputMaybe<SortOrder>;
  overview?: InputMaybe<SortOrder>;
  powderRoom?: InputMaybe<SortOrder>;
  rainwaterTank?: InputMaybe<SortOrder>;
  raisedCeiling?: InputMaybe<SortOrder>;
  rangehood?: InputMaybe<SortOrder>;
  rearMasterBedroom?: InputMaybe<SortOrder>;
  rumpus?: InputMaybe<SortOrder>;
  sarking?: InputMaybe<SortOrder>;
  securityScreens?: InputMaybe<SortOrder>;
  separateLivingDining?: InputMaybe<SortOrder>;
  separateToilet?: InputMaybe<SortOrder>;
  serviceConnections?: InputMaybe<SortOrder>;
  smokeDetectors?: InputMaybe<SortOrder>;
  softCloseDrawers?: InputMaybe<SortOrder>;
  softCloseToiletSeat?: InputMaybe<SortOrder>;
  splitLevel?: InputMaybe<SortOrder>;
  splitSystemAirConditioning?: InputMaybe<SortOrder>;
  steelFrame?: InputMaybe<SortOrder>;
  storey?: InputMaybe<SortOrder>;
  study?: InputMaybe<SortOrder>;
  tVAntenna?: InputMaybe<SortOrder>;
  telephonePoints?: InputMaybe<SortOrder>;
  termiteTreatedTimber?: InputMaybe<SortOrder>;
  tileRoof?: InputMaybe<SortOrder>;
  tilingToAlfresco?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  tvPoints?: InputMaybe<SortOrder>;
  walkInLinen?: InputMaybe<SortOrder>;
  walkInPantry?: InputMaybe<SortOrder>;
  walkInRobe?: InputMaybe<SortOrder>;
};

export type IdFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Checks if the value matches the given word/words. */
  matches?: InputMaybe<Scalars['ID']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['ID']['input']>;
  nin?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type Image = {
  __typename?: 'Image';
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  asset: Maybe<SanityImageAsset>;
  crop: Maybe<SanityImageCrop>;
  hotspot: Maybe<SanityImageHotspot>;
};

export type ImageFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  asset?: InputMaybe<SanityImageAssetFilter>;
  crop?: InputMaybe<SanityImageCropFilter>;
  hotspot?: InputMaybe<SanityImageHotspotFilter>;
};

export type ImageSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  crop?: InputMaybe<SanityImageCropSorting>;
  hotspot?: InputMaybe<SanityImageHotspotSorting>;
};

export type IntFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Int']['input']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['Int']['input']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['Int']['input']>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['Int']['input']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['Int']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Int']['input']>;
};

export type Link = {
  __typename?: 'Link';
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  /** If this link has a reference and a URL, the reference will be used */
  reference: Maybe<ArticleOrBuilderOrHouseDesignOrPage>;
  /** Can be used to overwrite the title of the referenced page */
  text: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
};

export type LinkFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  text?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type LinkSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type Location = {
  __typename?: 'Location';
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  geopoint: Maybe<Geopoint>;
  radius: Maybe<Scalars['String']['output']>;
};

export type LocationFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  geopoint?: InputMaybe<GeopointFilter>;
  radius?: InputMaybe<StringFilter>;
};

export type LocationSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  geopoint?: InputMaybe<GeopointSorting>;
  radius?: InputMaybe<SortOrder>;
};

export type MediaTag = Document & {
  __typename?: 'MediaTag';
  /** Date the document was created */
  _createdAt: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id: Maybe<Scalars['ID']['output']>;
  _key: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt: Maybe<Scalars['DateTime']['output']>;
  name: Maybe<Slug>;
};

export type MediaTagFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  name?: InputMaybe<SlugFilter>;
};

export type MediaTagSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  name?: InputMaybe<SlugSorting>;
};

export type NavigationLink = {
  __typename?: 'NavigationLink';
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  /** If this link has a reference and a URL, the reference will be used */
  reference: Maybe<ArticleOrBuilderOrHouseDesignOrPage>;
  /** Can be used to overwrite the title of the referenced page */
  text: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
};

export type NavigationLinkFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  text?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type NavigationLinkSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type Page = Document & {
  __typename?: 'Page';
  /** Date the document was created */
  _createdAt: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id: Maybe<Scalars['ID']['output']>;
  _key: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt: Maybe<Scalars['DateTime']['output']>;
  content: Maybe<Array<Maybe<PageBuilderBuilderCategoryListOrPageBuilderBuilderLogosCellOrPageBuilderCtaOrPageBuilderDesignCarouselOrPageBuilderFeaturedArticleOrPageBuilderFeaturedArticlesOrPageBuilderFeaturedDesignsOrPageBuilderHeroBannerOrPageBuilderWizards>>>;
  seo: Maybe<Seo>;
  slug: Maybe<Slug>;
  title: Maybe<Scalars['String']['output']>;
};

export type PageBuilderBuilderCategoryList = {
  __typename?: 'PageBuilderBuilderCategoryList';
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  articleType: Maybe<Scalars['String']['output']>;
  categories: Maybe<Array<Maybe<Category>>>;
  title: Maybe<Scalars['String']['output']>;
};

export type PageBuilderBuilderCategoryListFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  articleType?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PageBuilderBuilderCategoryListOrPageBuilderBuilderLogosCellOrPageBuilderCtaOrPageBuilderDesignCarouselOrPageBuilderFeaturedArticleOrPageBuilderFeaturedArticlesOrPageBuilderFeaturedDesignsOrPageBuilderHeroBannerOrPageBuilderWizards = PageBuilderBuilderCategoryList | PageBuilderBuilderLogosCell | PageBuilderCta | PageBuilderDesignCarousel | PageBuilderFeaturedArticle | PageBuilderFeaturedArticles | PageBuilderFeaturedDesigns | PageBuilderHeroBanner | PageBuilderWizards;

export type PageBuilderBuilderCategoryListSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  articleType?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type PageBuilderBuilderLogosCell = {
  __typename?: 'PageBuilderBuilderLogosCell';
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  logos: Maybe<Array<Maybe<Builder>>>;
  title: Maybe<Scalars['String']['output']>;
};

export type PageBuilderBuilderLogosCellFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PageBuilderBuilderLogosCellSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type PageBuilderCta = {
  __typename?: 'PageBuilderCta';
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  ctaLink: Maybe<Link>;
  title: Maybe<Scalars['String']['output']>;
};

export type PageBuilderCtaFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  ctaLink?: InputMaybe<LinkFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PageBuilderCtaSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  ctaLink?: InputMaybe<LinkSorting>;
  title?: InputMaybe<SortOrder>;
};

export type PageBuilderDesignCarousel = {
  __typename?: 'PageBuilderDesignCarousel';
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  designs: Maybe<Array<Maybe<HouseDesign>>>;
  title: Maybe<Scalars['String']['output']>;
};

export type PageBuilderDesignCarouselFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PageBuilderDesignCarouselSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type PageBuilderFeaturedArticle = {
  __typename?: 'PageBuilderFeaturedArticle';
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  article: Maybe<Article>;
  image: Maybe<Image>;
};

export type PageBuilderFeaturedArticleFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  article?: InputMaybe<ArticleFilter>;
  image?: InputMaybe<ImageFilter>;
};

export type PageBuilderFeaturedArticleSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  image?: InputMaybe<ImageSorting>;
};

export type PageBuilderFeaturedArticles = {
  __typename?: 'PageBuilderFeaturedArticles';
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  articles: Maybe<Array<Maybe<Article>>>;
  ctaLink: Maybe<Link>;
  title: Maybe<Scalars['String']['output']>;
};

export type PageBuilderFeaturedArticlesFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  ctaLink?: InputMaybe<LinkFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PageBuilderFeaturedArticlesSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  ctaLink?: InputMaybe<LinkSorting>;
  title?: InputMaybe<SortOrder>;
};

export type PageBuilderFeaturedDesigns = {
  __typename?: 'PageBuilderFeaturedDesigns';
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  ctaLink: Maybe<Link>;
  houseDesigns: Maybe<Array<Maybe<HouseDesign>>>;
  title: Maybe<Scalars['String']['output']>;
};

export type PageBuilderFeaturedDesignsFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  ctaLink?: InputMaybe<LinkFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PageBuilderFeaturedDesignsSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  ctaLink?: InputMaybe<LinkSorting>;
  title?: InputMaybe<SortOrder>;
};

export type PageBuilderHeroBanner = {
  __typename?: 'PageBuilderHeroBanner';
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  image: Maybe<Image>;
  title: Maybe<Scalars['String']['output']>;
};

export type PageBuilderHeroBannerFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  image?: InputMaybe<ImageFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PageBuilderHeroBannerSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  image?: InputMaybe<ImageSorting>;
  title?: InputMaybe<SortOrder>;
};

export type PageBuilderWizard = {
  __typename?: 'PageBuilderWizard';
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  icon: Maybe<Scalars['String']['output']>;
  superscript: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};

export type PageBuilderWizardFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  icon?: InputMaybe<StringFilter>;
  superscript?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PageBuilderWizardSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  icon?: InputMaybe<SortOrder>;
  superscript?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type PageBuilderWizards = {
  __typename?: 'PageBuilderWizards';
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
  wizards: Maybe<Array<Maybe<PageBuilderWizard>>>;
};

export type PageBuilderWizardsFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PageBuilderWizardsSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type PageFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  seo?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PageSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  seo?: InputMaybe<SeoSorting>;
  slug?: InputMaybe<SlugSorting>;
  title?: InputMaybe<SortOrder>;
};

export type Person = Document & {
  __typename?: 'Person';
  /** Date the document was created */
  _createdAt: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id: Maybe<Scalars['ID']['output']>;
  _key: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt: Maybe<Scalars['DateTime']['output']>;
  name: Maybe<Scalars['String']['output']>;
  picture: Maybe<Image>;
  title: Maybe<Scalars['String']['output']>;
};

export type PersonFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  name?: InputMaybe<StringFilter>;
  picture?: InputMaybe<ImageFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PersonSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  picture?: InputMaybe<ImageSorting>;
  title?: InputMaybe<SortOrder>;
};

export type RootQuery = {
  __typename?: 'RootQuery';
  Article: Maybe<Article>;
  Builder: Maybe<Builder>;
  Category: Maybe<Category>;
  Document: Maybe<Document>;
  HouseDesign: Maybe<HouseDesign>;
  MediaTag: Maybe<MediaTag>;
  Page: Maybe<Page>;
  Person: Maybe<Person>;
  SanityFileAsset: Maybe<SanityFileAsset>;
  SanityImageAsset: Maybe<SanityImageAsset>;
  Settings: Maybe<Settings>;
  allArticle: Array<Article>;
  allBuilder: Array<Builder>;
  allCategory: Array<Category>;
  allDocument: Array<Document>;
  allHouseDesign: Array<HouseDesign>;
  allMediaTag: Array<MediaTag>;
  allPage: Array<Page>;
  allPerson: Array<Person>;
  allSanityFileAsset: Array<SanityFileAsset>;
  allSanityImageAsset: Array<SanityImageAsset>;
  allSettings: Array<Settings>;
};


export type RootQueryArticleArgs = {
  id: Scalars['ID']['input'];
};


export type RootQueryBuilderArgs = {
  id: Scalars['ID']['input'];
};


export type RootQueryCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type RootQueryDocumentArgs = {
  id: Scalars['ID']['input'];
};


export type RootQueryHouseDesignArgs = {
  id: Scalars['ID']['input'];
};


export type RootQueryMediaTagArgs = {
  id: Scalars['ID']['input'];
};


export type RootQueryPageArgs = {
  id: Scalars['ID']['input'];
};


export type RootQueryPersonArgs = {
  id: Scalars['ID']['input'];
};


export type RootQuerySanityFileAssetArgs = {
  id: Scalars['ID']['input'];
};


export type RootQuerySanityImageAssetArgs = {
  id: Scalars['ID']['input'];
};


export type RootQuerySettingsArgs = {
  id: Scalars['ID']['input'];
};


export type RootQueryAllArticleArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ArticleSorting>>;
  where?: InputMaybe<ArticleFilter>;
};


export type RootQueryAllBuilderArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<BuilderSorting>>;
  where?: InputMaybe<BuilderFilter>;
};


export type RootQueryAllCategoryArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CategorySorting>>;
  where?: InputMaybe<CategoryFilter>;
};


export type RootQueryAllDocumentArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<DocumentSorting>>;
  where?: InputMaybe<DocumentFilter>;
};


export type RootQueryAllHouseDesignArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<HouseDesignSorting>>;
  where?: InputMaybe<HouseDesignFilter>;
};


export type RootQueryAllMediaTagArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MediaTagSorting>>;
  where?: InputMaybe<MediaTagFilter>;
};


export type RootQueryAllPageArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PageSorting>>;
  where?: InputMaybe<PageFilter>;
};


export type RootQueryAllPersonArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PersonSorting>>;
  where?: InputMaybe<PersonFilter>;
};


export type RootQueryAllSanityFileAssetArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SanityFileAssetSorting>>;
  where?: InputMaybe<SanityFileAssetFilter>;
};


export type RootQueryAllSanityImageAssetArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SanityImageAssetSorting>>;
  where?: InputMaybe<SanityImageAssetFilter>;
};


export type RootQueryAllSettingsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SettingsSorting>>;
  where?: InputMaybe<SettingsFilter>;
};

export type SanityAssetSourceData = {
  __typename?: 'SanityAssetSourceData';
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  /** The unique ID for the asset within the originating source so you can programatically find back to it */
  id: Maybe<Scalars['String']['output']>;
  /** A canonical name for the source this asset is originating from */
  name: Maybe<Scalars['String']['output']>;
  /** A URL to find more information about this asset in the originating source */
  url: Maybe<Scalars['String']['output']>;
};

export type SanityAssetSourceDataFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityAssetSourceDataSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityFileAsset = Document & {
  __typename?: 'SanityFileAsset';
  /** Date the document was created */
  _createdAt: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id: Maybe<Scalars['ID']['output']>;
  _key: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt: Maybe<Scalars['DateTime']['output']>;
  altText: Maybe<Scalars['String']['output']>;
  assetId: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  extension: Maybe<Scalars['String']['output']>;
  label: Maybe<Scalars['String']['output']>;
  mimeType: Maybe<Scalars['String']['output']>;
  originalFilename: Maybe<Scalars['String']['output']>;
  path: Maybe<Scalars['String']['output']>;
  sha1hash: Maybe<Scalars['String']['output']>;
  size: Maybe<Scalars['Float']['output']>;
  source: Maybe<SanityAssetSourceData>;
  title: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
};

export type SanityFileAssetFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  altText?: InputMaybe<StringFilter>;
  assetId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  extension?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  mimeType?: InputMaybe<StringFilter>;
  originalFilename?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  sha1hash?: InputMaybe<StringFilter>;
  size?: InputMaybe<FloatFilter>;
  source?: InputMaybe<SanityAssetSourceDataFilter>;
  title?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityFileAssetSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  altText?: InputMaybe<SortOrder>;
  assetId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  extension?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  mimeType?: InputMaybe<SortOrder>;
  originalFilename?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  sha1hash?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  source?: InputMaybe<SanityAssetSourceDataSorting>;
  title?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityImageAsset = Document & {
  __typename?: 'SanityImageAsset';
  /** Date the document was created */
  _createdAt: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id: Maybe<Scalars['ID']['output']>;
  _key: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt: Maybe<Scalars['DateTime']['output']>;
  altText: Maybe<Scalars['String']['output']>;
  assetId: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  extension: Maybe<Scalars['String']['output']>;
  label: Maybe<Scalars['String']['output']>;
  metadata: Maybe<SanityImageMetadata>;
  mimeType: Maybe<Scalars['String']['output']>;
  originalFilename: Maybe<Scalars['String']['output']>;
  path: Maybe<Scalars['String']['output']>;
  sha1hash: Maybe<Scalars['String']['output']>;
  size: Maybe<Scalars['Float']['output']>;
  source: Maybe<SanityAssetSourceData>;
  title: Maybe<Scalars['String']['output']>;
  uploadId: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
};

export type SanityImageAssetFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  altText?: InputMaybe<StringFilter>;
  assetId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  extension?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<SanityImageMetadataFilter>;
  mimeType?: InputMaybe<StringFilter>;
  originalFilename?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  sha1hash?: InputMaybe<StringFilter>;
  size?: InputMaybe<FloatFilter>;
  source?: InputMaybe<SanityAssetSourceDataFilter>;
  title?: InputMaybe<StringFilter>;
  uploadId?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityImageAssetSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  altText?: InputMaybe<SortOrder>;
  assetId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  extension?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SanityImageMetadataSorting>;
  mimeType?: InputMaybe<SortOrder>;
  originalFilename?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  sha1hash?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  source?: InputMaybe<SanityAssetSourceDataSorting>;
  title?: InputMaybe<SortOrder>;
  uploadId?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityImageCrop = {
  __typename?: 'SanityImageCrop';
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  bottom: Maybe<Scalars['Float']['output']>;
  left: Maybe<Scalars['Float']['output']>;
  right: Maybe<Scalars['Float']['output']>;
  top: Maybe<Scalars['Float']['output']>;
};

export type SanityImageCropFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  bottom?: InputMaybe<FloatFilter>;
  left?: InputMaybe<FloatFilter>;
  right?: InputMaybe<FloatFilter>;
  top?: InputMaybe<FloatFilter>;
};

export type SanityImageCropSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  bottom?: InputMaybe<SortOrder>;
  left?: InputMaybe<SortOrder>;
  right?: InputMaybe<SortOrder>;
  top?: InputMaybe<SortOrder>;
};

export type SanityImageDimensions = {
  __typename?: 'SanityImageDimensions';
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  aspectRatio: Maybe<Scalars['Float']['output']>;
  height: Maybe<Scalars['Float']['output']>;
  width: Maybe<Scalars['Float']['output']>;
};

export type SanityImageDimensionsFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  aspectRatio?: InputMaybe<FloatFilter>;
  height?: InputMaybe<FloatFilter>;
  width?: InputMaybe<FloatFilter>;
};

export type SanityImageDimensionsSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  aspectRatio?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export type SanityImageHotspot = {
  __typename?: 'SanityImageHotspot';
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  height: Maybe<Scalars['Float']['output']>;
  width: Maybe<Scalars['Float']['output']>;
  x: Maybe<Scalars['Float']['output']>;
  y: Maybe<Scalars['Float']['output']>;
};

export type SanityImageHotspotFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  height?: InputMaybe<FloatFilter>;
  width?: InputMaybe<FloatFilter>;
  x?: InputMaybe<FloatFilter>;
  y?: InputMaybe<FloatFilter>;
};

export type SanityImageHotspotSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
  x?: InputMaybe<SortOrder>;
  y?: InputMaybe<SortOrder>;
};

export type SanityImageMetadata = {
  __typename?: 'SanityImageMetadata';
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  blurHash: Maybe<Scalars['String']['output']>;
  dimensions: Maybe<SanityImageDimensions>;
  hasAlpha: Maybe<Scalars['Boolean']['output']>;
  isOpaque: Maybe<Scalars['Boolean']['output']>;
  location: Maybe<Geopoint>;
  lqip: Maybe<Scalars['String']['output']>;
  palette: Maybe<SanityImagePalette>;
};

export type SanityImageMetadataFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  blurHash?: InputMaybe<StringFilter>;
  dimensions?: InputMaybe<SanityImageDimensionsFilter>;
  hasAlpha?: InputMaybe<BooleanFilter>;
  isOpaque?: InputMaybe<BooleanFilter>;
  location?: InputMaybe<GeopointFilter>;
  lqip?: InputMaybe<StringFilter>;
  palette?: InputMaybe<SanityImagePaletteFilter>;
};

export type SanityImageMetadataSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  blurHash?: InputMaybe<SortOrder>;
  dimensions?: InputMaybe<SanityImageDimensionsSorting>;
  hasAlpha?: InputMaybe<SortOrder>;
  isOpaque?: InputMaybe<SortOrder>;
  location?: InputMaybe<GeopointSorting>;
  lqip?: InputMaybe<SortOrder>;
  palette?: InputMaybe<SanityImagePaletteSorting>;
};

export type SanityImagePalette = {
  __typename?: 'SanityImagePalette';
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  darkMuted: Maybe<SanityImagePaletteSwatch>;
  darkVibrant: Maybe<SanityImagePaletteSwatch>;
  dominant: Maybe<SanityImagePaletteSwatch>;
  lightMuted: Maybe<SanityImagePaletteSwatch>;
  lightVibrant: Maybe<SanityImagePaletteSwatch>;
  muted: Maybe<SanityImagePaletteSwatch>;
  vibrant: Maybe<SanityImagePaletteSwatch>;
};

export type SanityImagePaletteFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  darkMuted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  dominant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  lightMuted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  muted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  vibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
};

export type SanityImagePaletteSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  darkMuted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  dominant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  lightMuted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  muted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  vibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
};

export type SanityImagePaletteSwatch = {
  __typename?: 'SanityImagePaletteSwatch';
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  background: Maybe<Scalars['String']['output']>;
  foreground: Maybe<Scalars['String']['output']>;
  population: Maybe<Scalars['Float']['output']>;
  title: Maybe<Scalars['String']['output']>;
};

export type SanityImagePaletteSwatchFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  background?: InputMaybe<StringFilter>;
  foreground?: InputMaybe<StringFilter>;
  population?: InputMaybe<FloatFilter>;
  title?: InputMaybe<StringFilter>;
};

export type SanityImagePaletteSwatchSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  background?: InputMaybe<SortOrder>;
  foreground?: InputMaybe<SortOrder>;
  population?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Sanity_DocumentFilter = {
  /** All documents that are drafts. */
  is_draft?: InputMaybe<Scalars['Boolean']['input']>;
  /** All documents referencing the given document ID. */
  references?: InputMaybe<Scalars['ID']['input']>;
};

export type Seo = {
  __typename?: 'Seo';
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  image: Maybe<Image>;
  /** Hide this page from search engines and the sitemap */
  noIndex: Maybe<Scalars['Boolean']['output']>;
  /** Override the page title */
  title: Maybe<Scalars['String']['output']>;
};

export type SeoFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  image?: InputMaybe<ImageFilter>;
  noIndex?: InputMaybe<BooleanFilter>;
  title?: InputMaybe<StringFilter>;
};

export type SeoSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  image?: InputMaybe<ImageSorting>;
  noIndex?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Settings = Document & {
  __typename?: 'Settings';
  /** Date the document was created */
  _createdAt: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id: Maybe<Scalars['ID']['output']>;
  _key: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt: Maybe<Scalars['DateTime']['output']>;
  footerLinkGroups: Maybe<Array<Maybe<FooterLinkGroup>>>;
  footerLinks: Maybe<Array<Maybe<Link>>>;
  footerSocialLinks: Maybe<Array<Maybe<FooterSocialLink>>>;
  logo: Maybe<Image>;
  navigationLinks: Maybe<Array<Maybe<NavigationLink>>>;
  /** This field is the title of your site. */
  title: Maybe<Scalars['String']['output']>;
};

export type SettingsFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  logo?: InputMaybe<ImageFilter>;
  title?: InputMaybe<StringFilter>;
};

export type SettingsSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  logo?: InputMaybe<ImageSorting>;
  title?: InputMaybe<SortOrder>;
};

export type Slug = {
  __typename?: 'Slug';
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  current: Maybe<Scalars['String']['output']>;
  source: Maybe<Scalars['String']['output']>;
};

export type SlugFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  current?: InputMaybe<StringFilter>;
  source?: InputMaybe<StringFilter>;
};

export type SlugSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  current?: InputMaybe<SortOrder>;
  source?: InputMaybe<SortOrder>;
};

export type SortOrder =
  /** Sorts on the value in ascending order. */
  | 'ASC'
  /** Sorts on the value in descending order. */
  | 'DESC';

export type Span = {
  __typename?: 'Span';
  _key: Maybe<Scalars['String']['output']>;
  _type: Maybe<Scalars['String']['output']>;
  marks: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  text: Maybe<Scalars['String']['output']>;
};

export type StringFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks if the value matches the given word/words. */
  matches?: InputMaybe<Scalars['String']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type GetArticleQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetArticleQuery = { __typename?: 'RootQuery', Article: { __typename?: 'Article', title: string | null } | null };

export type GetArticlesQueryVariables = Exact<{
  where?: InputMaybe<ArticleFilter>;
  sort?: InputMaybe<Array<ArticleSorting> | ArticleSorting>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetArticlesQuery = { __typename?: 'RootQuery', allArticle: Array<{ __typename?: 'Article', title: string | null }> };

export type GetBuilderQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetBuilderQuery = { __typename?: 'RootQuery', Builder: { __typename?: 'Builder', title: string | null } | null };

export type GetBuildersQueryVariables = Exact<{
  where?: InputMaybe<BuilderFilter>;
  sort?: InputMaybe<Array<BuilderSorting> | BuilderSorting>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetBuildersQuery = { __typename?: 'RootQuery', allBuilder: Array<{ __typename?: 'Builder', title: string | null }> };

export type GetHouseDesignQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetHouseDesignQuery = { __typename?: 'RootQuery', HouseDesign: { __typename?: 'HouseDesign', title: string | null } | null };

export type GetHouseDesignsQueryVariables = Exact<{
  where?: InputMaybe<HouseDesignFilter>;
  sort?: InputMaybe<Array<HouseDesignSorting> | HouseDesignSorting>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetHouseDesignsQuery = { __typename?: 'RootQuery', allHouseDesign: Array<{ __typename?: 'HouseDesign', title: string | null }> };


export const GetArticleDocument = gql`
    query GetArticle($id: ID!) {
  Article(id: $id) {
    title
  }
}
    `;
export const GetArticlesDocument = gql`
    query GetArticles($where: ArticleFilter, $sort: [ArticleSorting!], $limit: Int, $offset: Int) {
  allArticle(where: $where, sort: $sort, limit: $limit, offset: $offset) {
    title
  }
}
    `;
export const GetBuilderDocument = gql`
    query GetBuilder($id: ID!) {
  Builder(id: $id) {
    title
  }
}
    `;
export const GetBuildersDocument = gql`
    query GetBuilders($where: BuilderFilter, $sort: [BuilderSorting!], $limit: Int, $offset: Int) {
  allBuilder(where: $where, sort: $sort, limit: $limit, offset: $offset) {
    title
  }
}
    `;
export const GetHouseDesignDocument = gql`
    query GetHouseDesign($id: ID!) {
  HouseDesign(id: $id) {
    title
  }
}
    `;
export const GetHouseDesignsDocument = gql`
    query GetHouseDesigns($where: HouseDesignFilter, $sort: [HouseDesignSorting!], $limit: Int, $offset: Int) {
  allHouseDesign(where: $where, sort: $sort, limit: $limit, offset: $offset) {
    title
  }
}
    `;