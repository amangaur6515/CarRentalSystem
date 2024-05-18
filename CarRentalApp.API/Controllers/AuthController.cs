using CarRentalApp.API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace CarRentalApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly UserManager<IdentityUser> _userManager;
        public AuthController(SignInManager<IdentityUser> signInManager, UserManager<IdentityUser> userManager)
        {
            _signInManager = signInManager;
            _userManager = userManager;

        }
        [HttpPost("login")]
        public async Task<IActionResult> LogIn([FromBody] SignInModel signInModel)
        {
            if (ModelState.IsValid)
            {
                var result = await _signInManager.PasswordSignInAsync(signInModel.Username, signInModel.Password, false, false);
                if (result.Succeeded)
                {
                    var response = new { Username = signInModel.Username };
                    return Ok(response);
                   
                }
                
            }
            ModelState.AddModelError("", "Invalid Credentials");
            return BadRequest(ModelState);


        }
        [HttpPost("Signup")]
        public async Task<IActionResult> Signup([FromBody] User obj)
        {
            if (ModelState.IsValid)
            {
                var user = new IdentityUser() { UserName = obj.Email, Email = obj.Email };
                var result = await _userManager.CreateAsync(user, obj.Password); //bool result, identity result
                //if user created successfully
                if (result.Succeeded)
                {
                    //await _signInManager.CreateAsync(user, isPersistent: false);//session key using
                    var successResponse = new { message = "Signup success" };
                    return Ok(successResponse);
                }
                else
                {
                    return BadRequest(result.Errors);
                }
            }
            ModelState.AddModelError("", "invalid");
            return BadRequest(ModelState);
        }

    }
}
