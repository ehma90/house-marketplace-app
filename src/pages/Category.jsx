import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import Spinner from "../component/Spinner";
import { async } from "@firebase/util";

function Category() {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);

  const param = useParams();

  useEffect(() => {
    const fetchListing = async () => {
      try {
        // Get Reference
        const listingRef = collection(db, "listings");

        //create query
        const q = query(
          listingRef,
          where("type", "==", param.categoryName),
          orderBy("timestamp", "desc"),
          limit(10)
        );

        const querySnap = await getDocs(q);

        const listings = [];

        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setListings(listings);
        setLoading(false);
      } catch (error) {
        toast.error("could not fetch listings");
      }
    };

    fetchListing();
  }, [param.categoryName]);
  return (
    <div className="category">
      <header>
        <p className="pageHeader">
          {param.categoryName === "rent"
            ? "Places for rent"
            : "Places for Sale"}
        </p>
      </header>

      {loading ? (
        <Spinner />
      ) : listings && listings.length > 0 ? (
        <>
        <main>
            <ul className="categorylistings">
                {listings.map((listing) => (
                    <h3 key={listing.id}>{listing.data.name}</h3>
                ))}
            </ul>
        </main>
        </>
      ) : (
        <p>No Listing for {param.categoryName}</p>
      )}
    </div>
  );
}

export default Category;
