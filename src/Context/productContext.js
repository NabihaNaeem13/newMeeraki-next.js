import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../Reducer/ProductReducer";
import { useRouter } from "next/router";
const AppContext = createContext();

const initialState={
    isLoading:false,
    isError:false,
    endSeasonProduct:[],
    NewArrivalProduct:[],
    category:[],
    isCategoryLoading:false,
    isnewArrivalLoading:false,
    formalEdit:[],
    isFormalEditLoading:false,
    Sales:[],
    isSalesLoading:false,
    featureProduct:[],
    isFeatureLoading:false,
    isSingleLoading:false,
    singleProduct:[],
    RelatedProucts:[],
    isRelatedLoading:false,
    Banners:[],
    isBanners:false,
    categoryProduct:[],
    iscategoryProductLoading:false,
    navbar:[],
    isNavbarLoading:false,
    TopProduct:[],
    isTopProductsLoading:false,
    AddToWishlist:[],
    isWishlistLoading:false,
    TrackOrder:[],
    isTrackOrderLoading:false,
    currencies:[],
    isCurrencyLoading:false,
    HomeImage4:[],
    isHomeImage4Loading:false,
    ImageTwo:[],
    isImageTwo:false,
    InstaPhoto:[],
    isInstaLoading:false,
    Blog:[],
    isBlogLoading:false,
    BlogDetail:{},
    isBlogDetailLoading:false,
    basics:[],
    isBasicsLoading:false,
    festivePret:[],
    isfestivePretLoading:false,
    winterWear:[],
    iswinterWearLoading:false,
    readyToWear:[],
    isReadyToWearLoading:false,
    Unstitched:[],
    SubCategory:[],
    isSubCategoryLoading:false,
    allCategories:[],
    isAllCategoriesLoading:false
  }

const Insta_KEY="IGQVJVY1VRRWFxNU9JUEVyb2FJOGF5S3hEd3VCMzdLclFXTGd5ZAE5sUWZAtd045QlVnRHJOM0N3Sjh0TXhlSUo1MFlOQ21ua0pFZAEhJTUM5YWVJM0ZA6SlZAzalpQc1FoOU1zV0lpM19RQjRKdXdOWjVTcQZDZD";
const API = "https://portal.meeraki.com/api/v2/products/end-of-season";
const API1="https://portal.meeraki.com/api/v2/products/new-arrival";
const API2="https://portal.meeraki.com/api/v2/products/formal-edit";
const API3="https://portal.meeraki.com/api/v2/products/featured";
const API4="https://portal.meeraki.com/api/v2/filter/categories";
const API5="https://portal.meeraki.com/api/v2/sliders";
const API6="https://portal.meeraki.com/api/v2/currencies";
const APINAV="https://portal.meeraki.com/api/v2/categories/all";
const APIImage="https://portal.meeraki.com/api/v2/home-images4";
const ImageTwoAPI="https://portal.meeraki.com/api/v2/home-images";
const APIINSTA=`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,username,timestamp&access_token=${Insta_KEY}`
;
const saleapi="https://portal.meeraki.com/api/v2/subcat/salepod";
const BlogAPI="https://portal.meeraki.com/api/v2/blogs";
const APIBASICS="https://portal.meeraki.com/api/v2/subcat/basicspod";
const APIFESTIVEPRET="https://portal.meeraki.com/api/v2/subcat/festivepet";
const APIReadyToWear="https://portal.meeraki.com/api/v2/readytowear";
const APIWinterWear="https://portal.meeraki.com/api/v2/subcat/winterwearpod";

const APIALLCAT="https://portal.meeraki.com/api/v2/categories";

const AppProvider = ({ children }) => {
    const [state,dispatch]=useReducer(reducer,initialState);
   const router=useRouter();
    const  getProduct = async (url) => {
        dispatch({type:"SET_LOADING"})
      try {
        const res = await axios.get(url);
        const  endSeasonProduct=await res.data.data;
        console.log('endSeasonProduct',endSeasonProduct);
        dispatch({type:"SET_API_DATA",payload:endSeasonProduct})
        
      } catch (error) {
        dispatch({type:"API_ERROR"})
      }
      };
      const  getSales = async (url) => {
        dispatch({type:"SETSales_LOADING"})
      try {
        const res = await axios.get(url);
        const  Sales=await res.data.data;
        dispatch({type:"SET_APISales_DATA",payload:Sales})   
      } catch (error) {
        dispatch({type:"APISales_ERROR"})
      }
      };
      const  getBlog = async (url) => {
        dispatch({type:"SET_Blog_LOADING"})
      try {
        const res = await axios.get(url);
        const  Blog=await res.data.data;
        dispatch({type:"SET_Blog_DATA",payload:Blog})
        
      } catch (error) {
        dispatch({type:"Blog_ERROR"})
      }
      };
      const  getImage4 = async (url) => {
        dispatch({type:"SET_IMAGE_LOADING"})
      try {
        const res = await axios.get(url);
        const  HomeImage4=await res.data.data;
        dispatch({type:"SET_IMAGEAPI_DATA",payload:HomeImage4})
        
      } catch (error) {
        dispatch({type:"IMAGE_ERROR"})
      }
      };
      const  getNewArrival = async (url) => {
        dispatch({type:"SET_NEW_ARRIVAL_LOADING"})
      try {
        const res = await axios.get(url);
        const NewArrivalProduct=await res.data.data;
        dispatch({type:"SET_FeatureAPI_DATA",payload:NewArrivalProduct})
        
      } catch (error) {
        dispatch({type:"NEW_ARRIVAL_API_ERROR"})
      }
      };
      const  getFormalEdit = async (url) => {
        dispatch({type:"SET_FormalEdit_LOADING"})
      try {
        const res = await axios.get(url);
        const formalEdit=await res.data.data;
        dispatch({type:"SET_FormalEdit_DATA",payload:formalEdit})
        
      } catch (error) {
        dispatch({type:"FormalEdit_API_ERROR"})
      }
      };
      const  getBasics = async (url) => {
        dispatch({type:"SET_Basics_LOADING"})
      try {
        const res = await axios.get(url);
        const basics=await res.data.data;
        dispatch({type:"SET_Basics_DATA",payload:basics})
        
      } catch (error) {
        dispatch({type:"Basics_API_ERROR"})
      }
      };
      //FESTIVE PRET
      const  getFestivePret = async (url) => {
        dispatch({type:"SET_FestivePret_LOADING"})
      try {
        const res = await axios.get(url);
        const festivePret=await res.data.data;
        dispatch({type:"SET_FestivePret_DATA",payload:festivePret})
        
      } catch (error) {
        dispatch({type:"FestivePret_API_ERROR"})
      }
      };
      //WinterWear
      const  getWinterWear = async (url) => {
        dispatch({type:"SET_WinterWear_LOADING"})
      try {
        const res = await axios.get(url);
        const winterWear=await res.data.data;
        dispatch({type:"SET_WinterWear_DATA",payload:winterWear})
        
      } catch (error) {
        dispatch({type:"WinterWear_API_ERROR"})
      }
      };
      //ReadyToWear
      const  getReadyToWear = async (url) => {
        dispatch({type:"SET_ReadyToWear_LOADING"})
      try {
        const res = await axios.get(url);
        const readyToWear=await res.data.data;
        dispatch({type:"SET_ReadyToWear_DATA",payload:readyToWear})
      } catch (error) {
        dispatch({type:"ReadyToWear_API_ERROR"})
      }
      };
      //All categories
       const  getALLCategories = async (url) => {
        dispatch({type:"SET_ALLCategories_LOADING"})
      try {
        const res = await axios.get(url);
        const allCategories=await res.data.data[0];
        const Unstitched=await res.data.data[1];
        dispatch({type:"SET_ALLCategories_DATA",payload: allCategories})
        dispatch({type:"SET_Unstitched_DATA",payload:Unstitched})
        
      } catch (error) {
        dispatch({type:"ALLCategories_API_ERROR"})
      }
      };
      //FeatureProduct
      const  getFeatureProduct = async (url) => {
        dispatch({type:"SET_featureProduct_LOADING"})
      try {
        const res = await axios.get(url);
        const featureProduct=await res.data.data;
        dispatch({type:"SET_featureProduct_DATA",payload:featureProduct})
        
      } catch (error) {
        dispatch({type:"featureProduct_API_ERROR"})
      }
      };
//sub-category
const getSubCategory=async(url)=>{
  dispatch({type:"SET_SubCategory_LOADING"})
  try {
    const res = await axios.get(url);
    const SubCategory=await res.data.data;
    dispatch({type:"SET_SubCategory_Product",payload:SubCategory})
  } catch (error) {
    dispatch({type:"SET_SubCategory_ERROR"})
  }
};
      {/*const getSingleProduct=async(url)=>{
        dispatch({type:"SET_SINGLE_LOADING"})
        try {
          const res = await axios.get(url);
          const singleProduct=await res.data.data[0];
          dispatch({type:"SET_SINGLE_Product",payload:singleProduct})
        } catch (error) {
          dispatch({type:"SET_SINGLE_ERROR"})
        }
      };*/}
//BlogDetail
      const getBlogDetail=async(url)=>{
        dispatch({type:"SET_BlogDetail_loading"})
        try {
          const res = await axios.get(url);
          const BlogDetail=await res.data.data;
          dispatch({type:"SET_BlogDetail",payload:BlogDetail})
        } catch (error) {
          dispatch({type:"SET_BlogDetail_ERROR"})
        }
      }

     
      //RelateProduct
      const getRelateProduct=async(url)=>{
        dispatch({type:"SET_Related_LOADING"})
        try {
          const res = await axios.get(url);
          const  RelatedProucts=await res.data.data;
          dispatch({type:"Related_Product",payload:RelatedProucts})
        } catch (error) {
          dispatch({type:"SET_Related_ERROR"})
        }
      }

      //TopProducts
      const getTopProducts=async(url)=>{
        dispatch({type:"SET_Top_LOADING"})
        try {
          const res = await axios.get(url);
          const  TopProduct=await res.data.data;
          dispatch({type:"Top_Product",payload:TopProduct})
        } catch (error) {
          dispatch({type:"SET_Top_ERROR"})
        }
      }

      //WishList
      const getWishList=async(url)=>{
        dispatch({type:"SET_Wishlist_LOADING"})
        try {
          const res = await axios.get(url);
          const  AddToWishlist=await res.data.data;
          dispatch({type:"Wishlist_Product",payload:AddToWishlist})
        } catch (error) {
          dispatch({type:"SET_Wishlist_ERROR"})
        }
      }
      //Category
      const getCategory=async(url)=>{
        dispatch({type:"SET_Category_LOADING"})
       try{
        const res = await axios.get(url);
        const category=await res.data.data;
        dispatch({type:"SET_Category_Product",payload:category})
       }catch(error){
        dispatch({type:"SET_Category_ERROR"})
       }
      }

      //Banners
      const getBanners=async(url)=>{
        dispatch({type:"SET_Banners_LOADING"})
       try{
        const res = await axios.get(url);
        const Banners=await res.data.data;
        dispatch({type:"SET_Banners_Product",payload:Banners})
       }catch(error){
        dispatch({type:"SET_Banners_ERROR"})
       }
      }

      //ImageTwo
      const getImageTwo=async(url)=>{
        dispatch({type:"SET_ImageTwo_LOADING"})
       try{
        const res = await axios.get(url);
        const ImageTwo=await res.data.data;
        dispatch({type:"SET_ImageTwo_part",payload:ImageTwo})
       }catch(error){
        dispatch({type:"SET_ImageTwo_ERROR"})
       }
      }

      //Currency
      const getCurrency=async(url)=>{
        dispatch({type:"SET_CURRENCY_LOADING"})
        try{
         const res=await axios.get(url);
         const currencies=await res.data.data;
         dispatch({type:"SET_CURRENCY_API",payload:currencies})
        }catch(error){
          dispatch({type:"SET_CURRENCY_ERROR"})
        }
      }
      //CategoryProduct
      const getCategoryProduct=async(url)=>{
        dispatch({type:"SET_categoryProduct_LOADING"})
        try {
          const res = await axios.get(url);
          const  categoryProduct=await res.data.data;
          dispatch({type:"Set_categoryProduct",payload:categoryProduct})
        } catch (error) {
          dispatch({type:"SET_categoryProduct_ERROR"})
        }
      }

      //Navbar
      const getNavbar=async(url)=>{
        dispatch({type:"SET_NAVBAR_LOADING"})
        try{
          const res = await axios.get(url);
          const  navbar=await res.data.categories;
          console.log('nav res',navbar)
          dispatch({type:"Set_NAVBAR",payload:navbar})
        }catch(error){
          dispatch({type:"SET_NAVBAR_ERROR"})
        }
      }

      //TrackYourOrder
      const getTrackYourOrder=async(url)=>{
        dispatch({type:"SET_Track_LOADING"})
        try {
          const res = await axios.get(url);
          const TrackOrder=await res.data;
          dispatch({type:"Track_Your_Order",payload:TrackOrder})
        } catch (error) {
          dispatch({type:"SET_Track_ERROR"})
        }
      }
      //InstagramPhoto
     const getInstagramPhoto=async(url)=>{
        dispatch({type:"SET_InstaPhoto_LOADING"})
        try {
          const res = await axios.get(url);
          const InstaPhoto=await res.data.data;
          dispatch({type:"SET_InstaPhoto",payload:InstaPhoto})
        } catch (error) {
          dispatch({type:"SET_InstaPhoto_ERROR"})
        }
      }
    useEffect(() => {
       getProduct(API);
       getNewArrival(API1);
       getFormalEdit(API2);
       getFeatureProduct(API3);
       getCategory(API4);
       getBanners(API5);
       getCurrency(API6);
       getNavbar(APINAV);
       getImage4(APIImage);
       getImageTwo(ImageTwoAPI);
       getInstagramPhoto(APIINSTA);
       getBlog(BlogAPI);
       getBasics(APIBASICS);
       getFestivePret(APIFESTIVEPRET);
       getReadyToWear(APIReadyToWear);
       getWinterWear(APIWinterWear);
       getALLCategories(APIALLCAT);
       getSales(saleapi);
      }, [router.query]);
  return <AppContext.Provider value={{...state,getSubCategory,getRelateProduct,getCategoryProduct,getTopProducts,getWishList,getTrackYourOrder,getBlogDetail}}>{children}</AppContext.Provider>;
};

//custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
