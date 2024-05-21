<!-- Footer Start -->
<div class="container-fluid bg-dark footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
    <div class="container py-5">
        <div class="row g-5">
            <div class="col-lg-3 col-md-6">
                @include('office-widget')
            </div>
            <div class="col-lg-3 col-md-6">
                @include('quick-links-widget')
            </div>
            <!-- Include other widget areas as needed -->
        </div>
    </div>
</div>
<!-- Footer End -->
<!-- Copyright Start -->
<div class="container-fluid bg-secondary text-body copyright py-4">
    <div class="container">
        <div class="row">
            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy; <a class="fw-semi-bold" href="{{ home_url('/') }}">{{ get_bloginfo('name') }}</a>, All Right Reserved.
            </div>
            <div class="col-md-6 text-center text-md-end">
                <?php echo date('Y'); ?>
            </div>
        </div>
    </div>
</div>
<!-- Copyright End -->
