import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../Reducer/ProductReducer";
import { useRouter } from "next/router";
const AppContext = createContext();

const initialState={
    isError:false,
    NewArrivalProduct:[],
    isnewArrivalLoading:false,
    formalEdit:[],
    isFormalEditLoading:false,
    featureProduct:[],
    isFeatureLoading:false,
    FiftyPercentSale:[],
    isFiftyPercentSaleLoading:false,
    basics:[],
    isBasicsLoading:false,
    festivePret:[],
    isfestivePretLoading:false,
    winterWear:[],
    iswinterWearLoading:false,
    readyToWear:[],
    isReadyToWearLoading:false,
    Unstitched:[],
    isUnstitchedLoading:false,
    pieceSuit1:[],
    ispieceSuit1Loading:false,
    pieceSuit2:[],
    ispieceSuit2Loading:false,
    pieceSuit3:[],
    ispieceSuit3Loading:false,
    Sales:[],
    isSalesLoading:false,
    category:[],
    isCategoryLoading:false,
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
    SubCategory:[],
    isSubCategoryLoading:false,
    allCategories:[],
    isAllCategoriesLoading:false,
    PurchaseHistory:[],
    isPurchaseHistoryLoading:false
  }

const Insta_KEY="IGQVJWc01SaTZAOTzJ5WGhwV0RXVktmc0VqcTlER3g2eEN1MnI4NHpjdU9zWmJvU2gzTFR5NGpzYkJDanhCVDltNVFPU0Exc1Npb2pWSk5rWS14Tkg1NUhsd3lGaHR3UFN5eWV2R3c1cjBzLUdHSmp3QgZDZD";
const API ="https://meeraki.com/api/v2/subcat/unstichedpod";
const API1="https://meeraki.com/api/v2/subcat/newarrivalpod";
const API2="https://meeraki.com/api/v2/subcat/formaleditpod";
const API3="https://meeraki.com/api/v2/products/featured";
const API4="https://meeraki.com/api/v2/filter/categories";
const API5="https://meeraki.com/api/v2/sliders";
const API6="https://meeraki.com/api/v2/currencies";
const APIImage="https://meeraki.com/api/v2/home-images4";
const ImageTwoAPI="https://meeraki.com/api/v2/home-images";
const APIINSTA=`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,username,timestamp&access_token=${Insta_KEY}`;
const BlogAPI="https://meeraki.com/api/v2/blogs";
const APIBASICS="https://meeraki.com/api/v2/subcat/basicspod";
const APIFESTIVEPRET="https://meeraki.com/api/v2/subcat/festivepet";
const APIReadyToWear="https://meeraki.com/api/v2/readytowear";
const APIWinterWear="https://meeraki.com/api/v2/subcat/winterwearpod";
const APIALLCAT="https://meeraki.com/api/v2/categories";
const saleapi="https://meeraki.com/api/v2/subcat/salepod";
const FiftyPercentSaleAPI="https://meeraki.com/api/v2/fifty_percent_off_deal";
const piece1Api="https://meeraki.com/api/v2/subcat/1piecesuit";
const piece2Api="https://meeraki.com/api/v2/subcat/2piecesuit";
const piece3Api="https://meeraki.com/api/v2/subcat/3piecesuit";

const AppProvider = ({ children }) => {
    const [state,dispatch]=useReducer(reducer,initialState);
   const router=useRouter();
   //unstitched category
    const  getUnstitched = async (url) => {
        dispatch({type:"SET_Unstitched_LOADING"})
      try {
        const res = await axios.get(url);
        const  Unstitched=await res.data.data;
        setTimeout(()=>{
          dispatch({type:"SET_UnstitchedAPI_DATA",payload:Unstitched})
        },3000)
      } catch (error) {
        dispatch({type:"APIUnstitched_ERROR"})
      }
      };
      //sales category
      const  getSalesAPI = async (url) => {
        dispatch({type:"SET_Sales_LOADING"})
      try {
        const res = await axios.get(url);
        const  Sales=await res.data.data;
        dispatch({type:"SET_SalesAPI_DATA",payload:Sales})
        
      } catch (error) {
        dispatch({type:"API_Sales_ERROR"})
      }
      };
       //1 piece suit
       const  get1PieceSuit = async (url) => {
        dispatch({type:"SET_1PieceSuit_LOADING"})
      try {
        const res = await axios.get(url);
        const  pieceSuit1=await res.data.data;
        dispatch({type:"SET_1PieceSuit_DATA",payload:pieceSuit1})
        
      } catch (error) {
        dispatch({type:"API_1PieceSuit_ERROR"})
      }
      };
        //2 piece suit
        const  get2PieceSuit = async (url) => {
          dispatch({type:"SET_2PieceSuit_LOADING"})
        try {
          const res = await axios.get(url);
          const  pieceSuit2=await res.data.data;
          dispatch({type:"SET_2PieceSuit_DATA",payload:pieceSuit2})
          
        } catch (error) {
          dispatch({type:"API_2PieceSuit_ERROR"})
        }
        };
          //3 piece suit
       const  get3PieceSuit = async (url) => {
        dispatch({type:"SET_3PieceSuit_LOADING"})
      try {
        const res = await axios.get(url);
        const  pieceSuit3=await res.data.data;
        dispatch({type:"SET_3PieceSuit_DATA",payload:pieceSuit3})
        
      } catch (error) {
        dispatch({type:"API_3PieceSuit_ERROR"})
      }
      };
      //new arrivals
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
      //formal edit
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
      //basics
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
       //Fiftypercentsale
       const  getFiftyPercentSale = async (url) => {
        dispatch({type:"SET_FiftyPercentSale_LOADING"})
      try {
        const res = await axios.get(url);
        const FiftyPercentSale=await res.data;
        dispatch({type:"SET_FiftyPercentSale_DATA",payload:FiftyPercentSale})
        
      } catch (error) {
        dispatch({type:"FiftyPercentSale_API_ERROR"})
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
  const getSingleProduct=async(url)=>{
        dispatch({type:"SET_SINGLE_LOADING"})
        try {
          const res = await axios.get(url);
          const singleProduct=await res.data.data[0];
          dispatch({type:"SET_SINGLE_Product",payload:singleProduct})
        } catch (error) {
          dispatch({type:"SET_SINGLE_ERROR"})
        }
      };
//BlogDetail
      const getBlogDetail=async(url)=>{
        dispatch({type:"SET_BlogDetail_loading"})
        try {
          const res = await axios.get(url);
          const BlogDetail=await res.data.data[0];
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

      //pruchase history
      const PurchaseData=async()=>{
        dispatch({type:"SET_PurchaseHistory_LOADING"})
        try{
          const userId=localStorage.getItem('User');
          const res=await axios.get(`https://meeraki.com/api/v2/purchase-history/${userId}`)
          const PurchaseHistory=await res.data.data;
          dispatch({type:"SET_PurchaseHistory",payload:PurchaseHistory})
        }catch(err){
          dispatch({type:"SET_PurchaseHistory_Error"})
        } 
      }
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        // Perform some task
        getNewArrival(API1);
        getFormalEdit(API2);
        getFeatureProduct(API3);
        getSalesAPI(saleapi);
        getBasics(APIBASICS);
        getFestivePret(APIFESTIVEPRET);
        getReadyToWear(APIReadyToWear);
        getWinterWear(APIWinterWear);
        getFiftyPercentSale(FiftyPercentSaleAPI);
        getUnstitched(API);
        get1PieceSuit(piece1Api);
        get2PieceSuit(piece2Api);
        get3PieceSuit(piece3Api);
        getBanners(API5);
        getCurrency(API6);
        getImage4(APIImage);
        getImageTwo(ImageTwoAPI);
        getInstagramPhoto(APIINSTA);
        getBlog(BlogAPI);
        getALLCategories(APIALLCAT);
        PurchaseData()
      }, 1000);
    
        
      return () => {
        clearTimeout(timeoutId); // Cancel the timeout on component unmount
      };

      }, [router.query]);
  return <AppContext.Provider value={{...state,getSubCategory,getRelateProduct,getSingleProduct,getCategoryProduct,getTopProducts,getWishList,getTrackYourOrder,getBlogDetail}}>{children}</AppContext.Provider>;
};

//custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
