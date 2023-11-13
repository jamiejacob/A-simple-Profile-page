import React, { useState } from "react";
import Button from "./Button";
import Interest from "./Interest";

const OtherSettings = ({ userInterests }) => {
  const [selectedInterest, setSelectedInterest] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [interests, setInterests] = useState(userInterests);
  const [newInterest, setNewInterest] = useState("");
  const [addInterest, setAddInterest] = useState(false);

  const handleSelectedInterest = (interest) => {
    setSelectedInterest(interest);
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedInterest(null);
  };
  const handleDeleteInterest = () => {
    const updatedInterests = interests.filter(
      (interest) => interest !== selectedInterest
    );
    setInterests(updatedInterests);
    setOpenDialog(false);
    setSelectedInterest(null);
  };
  const handleAddInterest = () => {
    if (newInterest.trim() !== "") setInterests([...interests, newInterest]);
    setAddInterest(false);
    setNewInterest(null);
  };
  return (
    <>
      {openDialog && (
        <Interest
          interest={selectedInterest}
          onClose={handleCloseDialog}
          onConfirm={handleDeleteInterest}
          actionButton="Delete Skill"
        ></Interest>
      )}
      <div className="justify-between ">
        <h3>Other Settings</h3>
        <div>
          <h6 className="pb-3">Interests</h6>
          <span>
            {interests.map((interest, index) => (
              <li
                key={index}
                className={`badge ${
                  selectedInterest === interest ? "bg-blue-400" : ""
                }`}
                onClick={() => handleSelectedInterest(interest)}
              >
                {interest}
              </li>
            ))}
            {addInterest && (
              <div className="pt-4 flex flex-col @md:flex-row gap-2 ">
                <input
                  type="text"
                  placeholder="Enter new interest"
                  value={newInterest}
                  onChange={(e) => setNewInterest(e.target.value)}
                />
                <Button
                  submit={handleAddInterest}
                  className="bg-sky-300 text-white"
                >
                  Add
                </Button>
              </div>
            )}

            {!addInterest && (
              <span
                className="text-sky-600 pl-3 font-bold text-sm cursor-pointer"
                onClick={() => setAddInterest(true)}
              >
                Add more
              </span>
            )}
          </span>
        </div>
      </div>
    </>
  );
};

export default OtherSettings;
