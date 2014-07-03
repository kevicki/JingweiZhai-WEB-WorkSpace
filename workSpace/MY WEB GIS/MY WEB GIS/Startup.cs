using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MY_WEB_GIS.Startup))]
namespace MY_WEB_GIS
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
