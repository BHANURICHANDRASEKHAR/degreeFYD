import pandas as pd

# Load the Excel file
df = pd.read_excel("C:/Users/chand/Downloads/college.xlsx")  # Replace with your file path

# Convert to JSON
json_data = df.to_json(orient="records", indent=4)

# Save to a JSON file
with open("output.json", "w") as f:
    f.write(json_data)

print("JSON file created successfully!")
