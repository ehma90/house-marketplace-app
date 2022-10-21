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
import ListingItem from "../component/ListingItem";
import { async } from "@firebase/util";

function Offer() {
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
          where("offer", "==", true),
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
  },[]);
  return (
    <div className="category">
      <header>
        <p className="pageHeader">
          Offers
        </p>
      </header>

      {loading ? (
        <Spinner />
      ) : listings && listings.length > 0 ? (
        <>
          <main>
            <ul className="categorylistings">
              {listings.map((listing) => (
                <ListingItem
                  listing={listing.data}
                  id={listing.id}
                  key={listing.id}
                />
              ))}
            </ul>
          </main>
        </>
      ) : (
        <p>There are no current Offers</p>
      )}
    </div>
  );
}

export default Offer;
