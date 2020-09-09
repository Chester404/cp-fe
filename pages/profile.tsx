import MainLayout from "../components/MainLayout";
// import Link from "next/link";
import { Users } from "../lib/endpoints";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { Store } from "../contextStore";

const REGIONS = [
  ["as", "Ashanti"],
  ["ba", "Brong Ahafo Region"],
  ["be", "Bono-East Region"],
  ["ah", "Ahafo Region"],
  ["cr", "Central Region"],
  ["er", "Eastern Region"],
  ["gr", "Greater Accra Region"],
  ["nr", "Northern Region"],
  ["sa", "Savannah Region"],
  ["ne", "North East Region"],
  ["ue", "Upper East Region"],
  ["uw", "Upper West Region"],
  ["ot", "Oti Region"],
  ["wr", "Western Region"],
  ["wn", "Western-North Region"],
];
const PRIVACY = [
  ["me", "Me"],
  ["or", "Registered Organisation Only"],
  ["orc", "Registered Organisation and Community members"],
];

export default function Home() {
  const [profileData, setProfileData] = useState<any>({});
  // const [statusMsg, setStatusMsg] = useState("");
  // const [statusColor, setStatusColor] = useState("blue");
  const { state } = useContext<any>(Store);
  console.log("Somestate", state);
  useEffect(() => {
    (async () => {
      const rs = await new Users().getUserProfile();
      const rIndex = REGIONS.findIndex((r) => r[0] == rs.region);
      rs.region = REGIONS[rIndex][1];
      const pIndex = PRIVACY.findIndex((r) => r[0] == rs.privacy_level);
      rs.privacy_level = PRIVACY[pIndex][1];
      setProfileData(rs);
      console.log(rs);
    })();
  }, []);

  return (
    <>
      <MainLayout>
        <div>
          {/* page-header */}
          <div className="page-header mt-6">
            <h1 className="page-title ">Profile</h1>
          </div>
          {/* End page-header */}
          <div className="row ">
            <div className="col-md-3 ">
              <div className="userpic mb-4">
                <img
                  src={
                    profileData.image
                      ? profileData.image
                      : "/assets/images/Profile_Icon.png"
                  }
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
              <div className="text-center">
                <Link href="/editprofile">
                  <a
                    className="btn btn-primary btn-block mt-1"
                    style={{ borderRadius: "12px", width: "200px" }}
                  >
                    Edit Information
                  </a>
                </Link>
                <br />
              </div>
            </div>
            <div className="col-lg-12 col-xl-9 col-md-12 col-sm-12">
              {/* <div className="card-body"> */}
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control form-rounded"
                      readOnly
                      defaultValue={
                        profileData?.first_name
                          ? profileData.first_name + " " + profileData.last_name
                          : ""
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="text"
                      className="form-control form-rounded"
                      readOnly
                      defaultValue={
                        profileData?.email
                          ? profileData.email
                          : state.emailaddress
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      className="form-control form-rounded"
                      readOnly
                      defaultValue={profileData?.phone ? profileData.phone : ""}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="form-label">Date of Birth</label>
                    <div className="form-group">
                      <div className="input-group-date">
                        <input
                          type="text"
                          id="dob"
                          className="form-control form-rounded"
                          readOnly
                          defaultValue={profileData?.dob ? profileData.dob : ""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Private Level</label>
                    <input
                      type="text"
                      className="form-control form-rounded"
                      readOnly
                      defaultValue={
                        profileData?.privacy_level
                          ? profileData.privacy_level
                          : ""
                      }
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <label>Gender</label>
                    <input
                      type="text"
                      className="form-control form-rounded"
                      readOnly
                      defaultValue={
                        profileData?.gender
                          ? profileData.gender === "m"
                            ? "Male"
                            : "Female"
                          : ""
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>Town</label>
                    <input
                      type="text"
                      className="form-control form-rounded"
                      readOnly
                      defaultValue={profileData?.town ? profileData.town : ""}
                    />
                  </div>
                  <div className="form-group">
                    <label>Region</label>
                    <input
                      type="text"
                      className="form-control form-rounded"
                      readOnly
                      defaultValue={
                        profileData?.region ? profileData.region : ""
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>Digital Address</label>
                    <input
                      type="text"
                      className="form-control form-rounded"
                      readOnly
                      defaultValue={
                        profileData?.gps_location
                          ? profileData.gps_location
                          : ""
                      }
                    />
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
