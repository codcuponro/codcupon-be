module.exports = ({ env }) => ({
    upload: {
        config: {
            provider: "strapi-provider-upload-do",
            providerOptions: {
                key: env('DO_SPACES_ACCESS_KEY'),
                secret: env('DO_SPACES_SECRET_KEY'),
                endpoint: env('DO_SPACES_ENDPOINT'),
                space: env('DO_SPACES_BUCKET'),
            }
        },
    },
    seo: {
        enabled: true,
    },
});
