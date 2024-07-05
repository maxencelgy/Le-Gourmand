# Endpoints

## docs/search-index/{version}

**Methods:** GET, HEAD

**Action:** BinaryTorch\LaRecipe\Http\Controllers\SearchController

---

## docs/styles/{style}

**Methods:** GET, HEAD

**Action:** BinaryTorch\LaRecipe\Http\Controllers\StyleController

---

## docs/scripts/{script}

**Methods:** GET, HEAD

**Action:** BinaryTorch\LaRecipe\Http\Controllers\ScriptController

---

## docs

**Methods:** GET, HEAD

**Action:** BinaryTorch\LaRecipe\Http\Controllers\DocumentationController@index

---

## docs/{version}/{page?}

**Methods:** GET, HEAD

**Action:** BinaryTorch\LaRecipe\Http\Controllers\DocumentationController@show

---

## sanctum/csrf-cookie

**Methods:** GET, HEAD

**Action:** Laravel\Sanctum\Http\Controllers\CsrfCookieController@show

---

## livewire/message/{name}

**Methods:** POST

**Action:** Livewire\Controllers\HttpConnectionHandler

---

## livewire/upload-file

**Methods:** POST

**Action:** Livewire\Controllers\FileUploadHandler@handle

---

## livewire/preview-file/{filename}

**Methods:** GET, HEAD

**Action:** Livewire\Controllers\FilePreviewHandler@handle

---

## livewire/livewire.js

**Methods:** GET, HEAD

**Action:** Livewire\Controllers\LivewireJavaScriptAssets@source

---

## livewire/livewire.js.map

**Methods:** GET, HEAD

**Action:** Livewire\Controllers\LivewireJavaScriptAssets@maps

---

## api/user

**Methods:** GET, HEAD

**Action:** Closure

---

## /

**Methods:** GET, HEAD

**Action:** App\Http\Controllers\PageController@home

---

## menu

**Methods:** GET, HEAD

**Action:** App\Http\Controllers\PageController@menu

---

## service

**Methods:** GET, HEAD

**Action:** App\Http\Controllers\PageController@service

---

## about

**Methods:** GET, HEAD

**Action:** App\Http\Controllers\PageController@about

---

## gallery

**Methods:** GET, HEAD

**Action:** App\Http\Controllers\PageController@gallery

---

## locations

**Methods:** GET, HEAD

**Action:** App\Http\Controllers\PageController@locations

---

## team

**Methods:** GET, HEAD

**Action:** App\Http\Controllers\PageController@team

---

## faqs

**Methods:** GET, HEAD

**Action:** App\Http\Controllers\PageController@faqs

---

## terms

**Methods:** GET, HEAD

**Action:** App\Http\Controllers\PageController@terms

---

## gift_cards

**Methods:** GET, HEAD

**Action:** App\Http\Controllers\PageController@gift_cards

---

## contacts

**Methods:** GET, HEAD

**Action:** App\Http\Controllers\PageController@contacts

---

## product/{slug}

**Methods:** GET, HEAD

**Action:** App\Http\Controllers\PageController@product

---

## politique-de-confidentialite

**Methods:** GET, HEAD

**Action:** App\Http\Controllers\PageController@privacy_policy

---

## cgv

**Methods:** GET, HEAD

**Action:** App\Http\Controllers\PageController@cgv

---

## mentions-legales

**Methods:** GET, HEAD

**Action:** App\Http\Controllers\PageController@mention

---

## my-account

**Methods:** GET, HEAD

**Action:** App\Http\Controllers\ProfileController@my_account

---

## account-details

**Methods:** GET, HEAD

**Action:** App\Http\Controllers\ProfileController@account_details

---

## account-details

**Methods:** POST

**Action:** App\Http\Controllers\ProfileController@store_account_details

---

## orders

**Methods:** GET, HEAD

**Action:** App\Http\Controllers\ProfileController@orders

---

## order-details/{order}

**Methods:** GET, HEAD

**Action:** App\Http\Controllers\ProfileController@order_details

---

## change-password

**Methods:** GET, HEAD

**Action:** App\Http\Controllers\ProfileController@change_password

---

## change-password

**Methods:** POST

**Action:** App\Http\Controllers\ProfileController@store_change_password

---

## shopping-cart

**Methods:** GET, HEAD

**Action:** App\Http\Controllers\ShoppingCartController@index

---

## shopping-cart

**Methods:** POST

**Action:** App\Http\Controllers\ShoppingCartController@store

---

## shopping-cart/{shopping_cart}

**Methods:** DELETE

**Action:** App\Http\Controllers\ShoppingCartController@destroy

---

## shopping-cart/apply-cupon-discount

**Methods:** GET, HEAD

**Action:** App\Http\Controllers\ShoppingCartController@apply_cupon_discount

---

## shopping-cart/remove-cupon-discount

**Methods:** GET, HEAD

**Action:** App\Http\Controllers\ShoppingCartController@remove_cupon_discount

---

## checkout

**Methods:** POST

**Action:** App\Http\Controllers\CheckoutController@checkout

---

## dashboard

**Methods:** GET, HEAD

**Action:** Closure

---

## dashboard/users

**Methods:** GET, HEAD

**Action:** App\Http\Livewire\User\ListUsers

---

## dashboard/categories

**Methods:** GET, HEAD

**Action:** App\Http\Livewire\Category\ListCategories

---

## dashboard/products

**Methods:** GET, HEAD

**Action:** App\Http\Livewire\Product\ListProducts

---

## dashboard/gift_card

**Methods:** GET, HEAD

**Action:** App\Http\Livewire\GiftCard\ListGiftCard

---

## dashboard/discount_code

**Methods:** GET, HEAD

**Action:** App\Http\Livewire\DiscountCode\ListDiscountCode

---

## dashboard/gallery

**Methods:** GET, HEAD

**Action:** App\Http\Livewire\Gallery\ListGallery

---

## dashboard/page

**Methods:** GET, HEAD

**Action:** App\Http\Livewire\Page\ListPage

---

## dashboard/promo

**Methods:** GET, HEAD

**Action:** App\Http\Livewire\Promo\ListPromo

---

## dashboard/order

**Methods:** GET, HEAD

**Action:** App\Http\Livewire\Order\ListOrder

---

## register

**Methods:** GET, HEAD

**Action:** App\Http\Controllers\Auth\RegisteredUserController@create

---

## register

**Methods:** POST

**Action:** App\Http\Controllers\Auth\RegisteredUserController@store

---

## login

**Methods:** GET, HEAD

**Action:** App\Http\Controllers\Auth\AuthenticatedSessionController@create

---

## login

**Methods:** POST

**Action:** App\Http\Controllers\Auth\AuthenticatedSessionController@store

---

## forgot-password

**Methods:** GET, HEAD

**Action:** App\Http\Controllers\Auth\PasswordResetLinkController@create

---

## forgot-password

**Methods:** POST

**Action:** App\Http\Controllers\Auth\PasswordResetLinkController@store

---

## reset-password/{token}

**Methods:** GET, HEAD

**Action:** App\Http\Controllers\Auth\NewPasswordController@create

---

## reset-password

**Methods:** POST

**Action:** App\Http\Controllers\Auth\NewPasswordController@store

---

## verify-email

**Methods:** GET, HEAD

**Action:** App\Http\Controllers\Auth\EmailVerificationPromptController@__invoke

---

## verify-email/{id}/{hash}

**Methods:** GET, HEAD

**Action:** App\Http\Controllers\Auth\VerifyEmailController@__invoke

---

## email/verification-notification

**Methods:** POST

**Action:** App\Http\Controllers\Auth\EmailVerificationNotificationController@store

---

## confirm-password

**Methods:** GET, HEAD

**Action:** App\Http\Controllers\Auth\ConfirmablePasswordController@show

---

## confirm-password

**Methods:** POST

**Action:** App\Http\Controllers\Auth\ConfirmablePasswordController@store

---

## logout

**Methods:** POST

**Action:** App\Http\Controllers\Auth\AuthenticatedSessionController@destroy

---

