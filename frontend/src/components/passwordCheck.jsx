import { Check, X } from "lucide-react";

function PasswordStrength({ password }) {
  let conditions = [
    { condition: "atleast 6 chars ", match: password.length > 6 },
    { condition: "contains a number", match: password.match(/\d/) },
    {
      condition: "contains a special character(@,$,*)",
      match: password.match(/[^A-Za-z0-9]/),
    },
    {
      condition: "contains a lowercase letter",
      match: password.match(/[a-z]/),
    },
    {
      condition: "contains a uppercase letter",
      match: password.match(/[A-Z]/),
    },
  ];

  let strength = conditions.filter((x) => x.match).length;
  console.log(strength);
  let colour;
  let strengthTerm;
  switch (strength) {
    case 1:
      colour = "bg-green-100";
      strengthTerm = "weak";
      break;
    case 2:
      colour = "bg-green-200";
      strengthTerm = "good";
      break;
    case 3:
      colour = "bg-green-300";
      strengthTerm = "average";
      break;
    case 4:
      colour = "bg-green-400";
      strengthTerm = "average";
      break;
    case 5:
      colour = "bg-green-500";
      strengthTerm = "strong";
      break;
  }

  return (
    <>
      <div className="w-full flex  flex-col">
        <div className="flex w-full items-center text-2  text-gray-600 mb-3">
          {`strength : ${strengthTerm ? strengthTerm : ""}`}
        </div>
        <div className="w-full flex items-center justify-between mb-3">
          {conditions.map((x, index) => {
            return (
              <>
                <div
                  className={
                    "w-6 h-1  rounded-sm " +
                    (index < strength ? colour : "bg-gray-500")
                  }
                ></div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default function PasswordCheck({ password }) {
  let conditions = [
    { condition: "atleast 6 chars ", match: password.length > 6 },
    { condition: "contains a number", match: password.match(/\d/) },
    {
      condition: "contains a special character(@,$,*)",
      match: password.match(/[^A-Za-z0-9]/),
    },
    {
      condition: "contains a lowercase letter",
      match: password.match(/[a-z]/),
    },
    {
      condition: "contains a uppercase letter",
      match: password.match(/[A-Z]/),
    },
  ];

  return (
    <div className="py-2 ml-2">
      <PasswordStrength password={password}></PasswordStrength>
      <div className="flex flex-col justify-center">
        {conditions.map((x) => {
          return (
            <>
              <div
                className={`flex items-center  ${
                  x.match ? "text-white" : "text-gray-500"
                }`}
              >
                <div>
                  {x.match ? (
                    <Check
                      className={`${
                        x.match ? "text-white" : "text-red-500"
                      } size-4 `}
                    />
                  ) : (
                    <X
                      className={`${
                        x.match ? "text-white " : "text-red-500"
                      } size-4 `}
                    />
                  )}
                </div>
                <div className="text-[16px] ml-2">{`${x.condition}`}</div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
