
const apiKey = '1mDheiPL7ikeHum5KhQuxhCgrL8ka7d62fBGhk0wNRcbwZEMfHUS5cwUMV80UX0CKhp_DmLnlVGf70ikv0vGisGXkNUCrd0QQ8PgmI2LlejLS6viGd_v2ilIBxBpXnYx';

const Yelp = {
    
};

const search = async (term, location, sortBy) => {
        return await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if(jsonResponse.businesses) {
            return jsonResponse.businesses.map(business => {
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address: business.address,
                city: business.city,
                state: business.state,
                zipCode: business.zipCode,
                category: business.category,
                rating: business.rating,
                reviewCount: business.reviewCount
            });
            }
        })

export.modules.Yelp;
