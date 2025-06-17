# API Documentation - Calculator Sarcina

This document describes the REST API endpoints available in the Calculator Sarcina application.

## Base URL

**Development:** `http://localhost:5000/api`
**Production:** `https://calculatorsarcina.com/api`

## Authentication

Currently, the API does not require authentication. All endpoints are publicly accessible.

## Content Type

All API requests and responses use JSON format:
- Request: `Content-Type: application/json`
- Response: `Content-Type: application/json`

## Error Handling

### Error Response Format

```json
{
  "error": "Error message",
  "details": "Detailed error information (optional)",
  "timestamp": "2025-06-17T08:00:00.000Z"
}
```

### HTTP Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request (validation errors)
- `404` - Not Found
- `500` - Internal Server Error

## Endpoints

### Pension Calculations

#### Calculate Pension

**POST** `/api/calculate-pension`

Calculate pension benefits based on user input parameters.

**Request Body:**
```json
{
  "currentAge": 45,
  "monthlySalary": 5000,
  "contributionYears": 20,
  "pensionType": "standard"
}
```

**Request Schema:**
- `currentAge` (number, required): Current age in years (18-70)
- `monthlySalary` (number, required): Monthly gross salary in RON (minimum 1000)
- `contributionYears` (number, required): Years of pension contributions (minimum 1)
- `pensionType` (string, required): Type of pension calculation
  - `"standard"` - Standard retirement pension
  - `"early_partial"` - Early partial pension
  - `"early_complete"` - Early complete pension

**Response (200):**
```json
{
  "id": 1,
  "amount": 2450.50,
  "details": "Pensie calculată pe baza contribuțiilor și vârstei actuale.",
  "breakdown": {
    "basePension": 2200.00,
    "contributionBonus": 350.50,
    "penalties": -100.00
  },
  "calculatedAt": "2025-06-17T08:00:00.000Z",
  "parameters": {
    "currentAge": 45,
    "monthlySalary": 5000,
    "contributionYears": 20,
    "pensionType": "standard"
  }
}
```

**Response Schema:**
- `id` (number): Unique calculation identifier
- `amount` (number): Monthly pension amount in RON
- `details` (string): Calculation explanation in Romanian
- `breakdown` (object): Detailed calculation breakdown
  - `basePension` (number): Base pension amount
  - `contributionBonus` (number): Bonus for contribution years
  - `penalties` (number): Penalties for early retirement (if applicable)
- `calculatedAt` (string): ISO timestamp of calculation
- `parameters` (object): Original input parameters

**Error Responses:**

*400 Bad Request - Validation Error:*
```json
{
  "error": "Validation failed",
  "details": [
    {
      "field": "currentAge",
      "message": "Age must be between 18 and 70"
    }
  ]
}
```

*500 Internal Server Error:*
```json
{
  "error": "Calculation failed",
  "details": "Unable to process pension calculation"
}
```

#### Get Calculation History

**GET** `/api/calculations`

Retrieve all pension calculations (for development/testing purposes).

**Response (200):**
```json
[
  {
    "id": 1,
    "amount": 2450.50,
    "details": "Pensie calculată pe baza contribuțiilor și vârstei actuale.",
    "breakdown": {
      "basePension": 2200.00,
      "contributionBonus": 350.50,
      "penalties": -100.00
    },
    "calculatedAt": "2025-06-17T08:00:00.000Z",
    "parameters": {
      "currentAge": 45,
      "monthlySalary": 5000,
      "contributionYears": 20,
      "pensionType": "standard"
    }
  }
]
```

### Blog Posts

#### Get All Blog Posts

**GET** `/api/blog-posts`

Retrieve all published blog posts about pension topics.

**Response (200):**
```json
[
  {
    "id": 1,
    "title": "Top 5 Greșeli de Evitat în Planificarea Pensiei",
    "slug": "top-5-greseli-planificare-pensie",
    "excerpt": "Descoperiți cele mai comune greșeli în planificarea pensiei și cum să le evitați...",
    "content": "Full blog post content in Romanian...",
    "publishedAt": "2025-06-17T08:00:00.000Z",
    "updatedAt": "2025-06-17T08:00:00.000Z",
    "author": "Expert Pensii",
    "tags": ["planificare", "pensie", "sfaturi"],
    "readingTime": 5
  }
]
```

**Response Schema:**
- `id` (number): Unique post identifier
- `title` (string): Post title in Romanian
- `slug` (string): URL-friendly post identifier
- `excerpt` (string): Short post summary
- `content` (string): Full post content (HTML/Markdown)
- `publishedAt` (string): ISO timestamp of publication
- `updatedAt` (string): ISO timestamp of last update
- `author` (string): Post author name
- `tags` (array): Array of topic tags
- `readingTime` (number): Estimated reading time in minutes

#### Get Single Blog Post

**GET** `/api/blog-posts/:slug`

Retrieve a specific blog post by its slug.

**Parameters:**
- `slug` (string): URL-friendly post identifier

**Response (200):**
```json
{
  "id": 1,
  "title": "Top 5 Greșeli de Evitat în Planificarea Pensiei",
  "slug": "top-5-greseli-planificare-pensie",
  "excerpt": "Descoperiți cele mai comune greșeli în planificarea pensiei și cum să le evitați...",
  "content": "Full blog post content in Romanian...",
  "publishedAt": "2025-06-17T08:00:00.000Z",
  "updatedAt": "2025-06-17T08:00:00.000Z",
  "author": "Expert Pensii",
  "tags": ["planificare", "pensie", "sfaturi"],
  "readingTime": 5
}
```

**Error Response (404):**
```json
{
  "error": "Blog post not found",
  "details": "No blog post found with the specified slug"
}
```

## Calculation Logic

### Pension Point System

The pension calculation is based on the Romanian pension point system:

1. **Pension Points** = (Individual Salary / National Average Salary) × Contribution Years
2. **Base Pension** = Pension Points × Current Pension Point Value
3. **Final Amount** = Base Pension + Bonuses - Penalties

### Pension Types

**Standard Pension:**
- No penalties applied
- Full pension calculation
- Available at retirement age (65 for men, 63+ for women)

**Early Partial Pension:**
- 25% reduction in pension amount
- Allows continued limited work
- Available 5 years before retirement age

**Early Complete Pension:**
- 0.5% reduction per month before retirement age
- Requires cessation of all work activities
- Available 5 years before retirement age

### Constants Used

- **Current Pension Point Value**: 1,785 RON (as of 2024)
- **National Average Salary**: 6,500 RON (estimated 2024)
- **Minimum Pension**: 1,000 RON
- **Maximum Pension Calculation**: No upper limit

## Rate Limiting

Currently, no rate limiting is implemented. For production use, consider implementing:
- 100 requests per 15 minutes per IP address
- Special limits for calculation endpoints

## CORS Configuration

The API supports CORS for frontend applications:
- Allowed Origins: Same origin in development, configured domains in production
- Allowed Methods: GET, POST, PUT, DELETE
- Allowed Headers: Content-Type, Authorization

## Data Validation

All input data is validated using Zod schemas:
- Type checking for all parameters
- Range validation for numerical inputs
- Required field validation
- Custom validation for Romanian-specific rules

## Example Usage

### JavaScript/TypeScript

```typescript
// Calculate pension
const calculatePension = async (params: PensionParams) => {
  const response = await fetch('/api/calculate-pension', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  return await response.json();
};

// Get blog posts
const getBlogPosts = async () => {
  const response = await fetch('/api/blog-posts');
  return await response.json();
};
```

### cURL Examples

```bash
# Calculate pension
curl -X POST http://localhost:5000/api/calculate-pension \
  -H "Content-Type: application/json" \
  -d '{
    "currentAge": 45,
    "monthlySalary": 5000,
    "contributionYears": 20,
    "pensionType": "standard"
  }'

# Get blog posts
curl http://localhost:5000/api/blog-posts

# Get specific blog post
curl http://localhost:5000/api/blog-posts/top-5-greseli-planificare-pensie
```

## Development Notes

### Adding New Endpoints

1. Define route in `server/routes.ts`
2. Add validation schema in `shared/schema.ts`
3. Implement business logic in `server/storage.ts`
4. Update this documentation

### Testing API Endpoints

Use the provided examples with curl or tools like Postman to test API functionality during development.

---

*This API documentation is updated with each new release. Last updated: June 17, 2025*