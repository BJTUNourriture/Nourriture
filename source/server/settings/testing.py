# -*- coding: utf-8 -*-

import logging
from nourriture.settings.common import *


##################################################################
# Debug settings
##################################################################

# Set debug
DEBUG = True

# Turns on/off template debug mode.
TEMPLATE_DEBUG = DEBUG

##################################################################
# Databases settings
##################################################################

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': SITE_DIR + '/db/development.sqlite'
    },

    'test': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': SITE_DIR + '/db/testing.sqlite'
    }
}

##################################################################
# Test runner settings
##################################################################

# The name of the class to use for starting the test suite.
TEST_RUNNER = 'testrunner.NoseCoverageTestRunner'

PASSWORD_HASHERS = (
    'django.contrib.auth.hashers.MD5PasswordHasher',
)

##################################################################
# Logging settings
##################################################################

LOG_DATE_FORMAT = '%d %b %Y %H:%M:%S'

LOG_FORMATTER = logging.Formatter(
    u'%(asctime)s | %(levelname)-7s | %(name)s | %(message)s',
    datefmt=LOG_DATE_FORMAT)

CONSOLE_HANDLER = logging.StreamHandler()

CONSOLE_HANDLER.setFormatter(LOG_FORMATTER)

CONSOLE_HANDLER.setLevel(logging.DEBUG)

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'filters': {
        'require_debug_false': {
            '()': 'django.utils.log.RequireDebugFalse'
        }
    },
    'handlers': {
        'mail_admins': {
            'level': 'ERROR',
            'filters': ['require_debug_false'],
            'class': 'django.utils.log.AdminEmailHandler'
        }
    },
    'loggers': {
        'django.request': {
            'handlers': ['mail_admins'],
            'level': 'ERROR',
            'propagate': True,
        },
    }
}

##################################################################
# Installed apps
##################################################################

TESTING_APPS = (
    # Testing specific apps here
    'django_nose',
)

INSTALLED_APPS = EXTERNAL_APPS + TESTING_APPS + INTERNAL_APPS
